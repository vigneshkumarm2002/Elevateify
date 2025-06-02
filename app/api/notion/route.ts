import { NextRequest, NextResponse } from 'next/server';

// Type for the form data
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Notion API configuration
    const NOTION_TOKEN = process.env.NOTION_TOKEN;
    const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

    // Debug logging
    console.log('Environment check:');
    console.log('NOTION_TOKEN exists:', !!NOTION_TOKEN);
    console.log('NOTION_DATABASE_ID exists:', !!NOTION_DATABASE_ID);
    console.log('Received data:', data);

    if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
      console.error('Missing Notion credentials');
      console.error('NOTION_TOKEN:', NOTION_TOKEN ? 'SET' : 'MISSING');
      console.error('NOTION_DATABASE_ID:', NOTION_DATABASE_ID ? 'SET' : 'MISSING');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare the Notion page properties
    const notionData = {
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        Email: {
          email: data.email,
        },
        Phone: {
          phone_number: data.phone || null,
        },
        Company: {
          rich_text: [
            {
              text: {
                content: data.company,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: data.message,
              },
            },
          ],
        },
        'Submitted At': {
          date: {
            start: data.submittedAt,
          },
        },
        Status: {
          select: {
            name: 'New',
          },
        },
      },
    };

    console.log('Sending to Notion API...');

    // Send data to Notion
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify(notionData),
    });

    console.log('Notion API response status:', response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Notion API error:', errorData);
      throw new Error(`Notion API error: ${response.status} - ${errorData}`);
    }

    const result = await response.json();
    console.log('Successfully saved to Notion:', result.id);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: result.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error submitting to Notion:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
} 