"use client";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

interface Tool {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const tools: Tool[] = [
  { id: "react", name: "React", icon: "⚛️", color: "#61DAFB" },
  { id: "nextjs", name: "Next.js", icon: "▲", color: "#000000" },
  { id: "typescript", name: "TypeScript", icon: "TS", color: "#3178C6" },
  { id: "figma", name: "Figma", icon: "🎨", color: "#F24E1E" },
  { id: "adobe", name: "Adobe", icon: "Ae", color: "#9999FF" },
  { id: "photoshop", name: "Photoshop", icon: "Ps", color: "#31A8FF" },
  { id: "premiere", name: "Premiere", icon: "Pr", color: "#9999FF" },
  { id: "youtube", name: "YouTube", icon: "▶️", color: "#FF0000" },
  { id: "twitter", name: "Twitter", icon: "🐦", color: "#1DA1F2" },
  { id: "instagram", name: "Instagram", icon: "📸", color: "#E4405F" },
  { id: "analytics", name: "Analytics", icon: "📊", color: "#FF6B35" },
  { id: "wordpress", name: "WordPress", icon: "W", color: "#21759B" },
  { id: "shopify", name: "Shopify", icon: "🛍️", color: "#96BF47" },
  { id: "mailchimp", name: "Mailchimp", icon: "📧", color: "#FFE01B" },
  { id: "slack", name: "Slack", icon: "💬", color: "#4A154B" },
  { id: "notion", name: "Notion", icon: "📝", color: "#000000" },
];

interface PhysicsIconProps {
  tool: Tool;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const PhysicsIcon: React.FC<PhysicsIconProps> = ({ tool, index, containerRef }) => {
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  
  // Debug logging
  console.log(`Rendering ${tool.name} at index ${index}`);
  
  // Physics state
  const physics = useRef({
    x: 150 + (index % 4) * 200, // Grid start position
    y: 150 + Math.floor(index / 4) * 120,
    vx: 0, // velocity x
    vy: 0, // velocity y
    radius: 32,
    mass: 1,
    isGrounded: false
  });

  // Physics constants
  const GRAVITY = 0.6;
  const FRICTION = 0.98;
  const BOUNCE_DAMPING = 0.7;
  const GROUND_FRICTION = 0.9;

  const updatePhysics = useCallback(() => {
    if (isDragging || !containerRef.current) return;

    const p = physics.current;
    const container = containerRef.current.getBoundingClientRect();
    
    // Apply gravity
    p.vy += GRAVITY;
    
    // Apply air friction
    p.vx *= FRICTION;
    p.vy *= FRICTION;
    
    // Update position
    p.x += p.vx;
    p.y += p.vy;
    
    // Boundary collision
    const maxX = container.width - p.radius * 2;
    const maxY = container.height - p.radius * 2;
    
    // Left/Right walls
    if (p.x <= p.radius) {
      p.x = p.radius;
      p.vx = -p.vx * BOUNCE_DAMPING;
    } else if (p.x >= maxX) {
      p.x = maxX;
      p.vx = -p.vx * BOUNCE_DAMPING;
    }
    
    // Floor/Ceiling
    if (p.y <= p.radius) {
      p.y = p.radius;
      p.vy = -p.vy * BOUNCE_DAMPING;
      p.isGrounded = false;
    } else if (p.y >= maxY) {
      p.y = maxY;
      p.vy = -p.vy * BOUNCE_DAMPING;
      p.isGrounded = true;
      // Extra friction when on ground
      p.vx *= GROUND_FRICTION;
    } else {
      p.isGrounded = false;
    }
    
    // Update visual position
    controls.set({
      x: p.x - p.radius,
      y: p.y - p.radius,
    });
  }, [isDragging, containerRef, controls]);

  const startPhysics = useCallback(() => {
    const animate = () => {
      updatePhysics();
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
  }, [updatePhysics]);

  useEffect(() => {
    // Start physics after a delay
    const timer = setTimeout(startPhysics, index * 100 + 500);
    
    return () => {
      clearTimeout(timer);
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startPhysics, index]);

  const handleDragStart = () => {
    setIsDragging(true);
    if (animationRef.current !== undefined) {
      cancelAnimationFrame(animationRef.current);
    }
    // Stop physics movement
    physics.current.vx = 0;
    physics.current.vy = 0;
  };

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Update physics position during drag
    const p = physics.current;
    p.x = (150 + (index % 4) * 200) + info.offset.x + 32;
    p.y = (150 + Math.floor(index / 4) * 120) + info.offset.y + 32;
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    
    // Apply throwing velocity
    physics.current.vx = info.velocity.x * 0.015;
    physics.current.vy = info.velocity.y * 0.015;
    
    // Restart physics
    startPhysics();
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{ 
        scale: 1.15, 
        zIndex: 1000,
        rotate: 5,
        filter: "brightness(1.2)",
      }}
      whileHover={{ 
        scale: 1.05,
        filter: "brightness(1.1)",
      }}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{ 
        x: 150 + (index % 4) * 200 - 32, 
        y: 150 + Math.floor(index / 4) * 120 - 32,
        scale: 0,
        opacity: 0
      }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="absolute cursor-grab active:cursor-grabbing"
      style={{
        width: 64,
        height: 64,
      }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
          // Slight rotation when moving fast
          rotate: isDragging ? 0 : Math.min(Math.abs(physics.current.vx) * 2, 15) * Math.sign(physics.current.vx)
        }}
        transition={{
          scale: { delay: index * 0.1 + 0.2, type: "spring", stiffness: 300, damping: 20 },
          opacity: { delay: index * 0.1 + 0.2 }
        }}
        className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all backdrop-blur-sm border border-white/30"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${tool.color}ff, ${tool.color}cc, ${tool.color}99)`,
          boxShadow: `0 8px 32px ${tool.color}40, inset 0 2px 8px rgba(255,255,255,0.2)`,
        }}
      >
        <motion.span 
          className="text-2xl"
          animate={{ 
            // Spin when bouncing
            rotate: physics.current.isGrounded && Math.abs(physics.current.vx) > 1 ? [0, 360] : 0
          }}
          transition={{
            duration: 0.5,
            ease: "linear"
          }}
        >
          {tool.icon}
        </motion.span>
      </motion.div>
      
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-white/90 whitespace-nowrap opacity-0 hover:opacity-100 transition-all duration-300 bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
        {tool.name}
      </div>
    </motion.div>
  );
};

export default function ToolsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,100,200,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent,rgba(255,255,255,0.03),transparent)]" />
      
      {/* Animated Background Particles */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(120,119,198,0.1), transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(120,119,198,0.1), transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(120,119,198,0.1), transparent 50%)",
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Header */}
      <div className="relative z-10 pt-20 pb-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
        >
          Tools We Use
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Real physics playground • Drag, throw and watch gravity work!
        </motion.p>
      </div>

      {/* Interactive Tools Container */}
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-[70vh] mx-auto max-w-6xl bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
        style={{ userSelect: 'none' }}
      >
        {tools.map((tool, index) => (
          <PhysicsIcon
            key={tool.id}
            tool={tool}
            index={index}
            containerRef={containerRef}
          />
        ))}
        
        {/* Instructions */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-white/70 text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
            🎯 Grab & throw the tools • Real gravity physics! 
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
} 