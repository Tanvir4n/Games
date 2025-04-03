<rosieArtifact title="Create House Layout with Collision Detection">
<rosieEdit file="Background.jsx">
<![CDATA[
<<<<<<< HEAD
import React from 'react';

export default function Background() {
=======
import React from 'react';

// Define the house layout that will be used for collision detection
export const houseLayout = {
  // Outer walls
  walls: [
    // Left wall
    { x: 50, y: 50, width: 10, height: 400 },
    // Right wall
    { x: 740, y: 50, width: 10, height: 400 },
    // Top wall
    { x: 50, y: 50, width: 700, height: 10 },
    // Bottom wall
    { x: 50, y: 450, width: 700, height: 10 },
    
    // Interior walls
    // Living room to kitchen divider
    { x: 350, y: 50, width: 10, height: 150 },
    // Kitchen to bedroom divider
    { x: 350, y: 250, width: 10, height: 200 },
    // Bathroom wall
    { x: 550, y: 250, width: 10, height: 200 },
    // Horizontal divider
    { x: 50, y: 250, width: 700, height: 10 },
  ],
  
  // Doorways and passages (areas where player can walk through)
  doors: [
    // Living room to kitchen door
    { x: 350, y: 150, width: 10, height: 50 },
    // Kitchen to bedroom door
    { x: 350, y: 300, width: 10, height: 50 },
    // Bedroom to bathroom door
    { x: 550, y: 300, width: 10, height: 50 },
  ],
  
  // Room definitions for AI navigation
  rooms: [
    { name: "Living Room", x: 60, y: 60, width: 280, height: 180 },
    { name: "Kitchen", x: 370, y: 60, width: 370, height: 180 },
    { name: "Bedroom", x: 60, y: 260, width: 280, height: 180 },
    { name: "Office", x: 370, y: 260, width: 170, height: 180 },
    { name: "Bathroom", x: 570, y: 260, width: 170, height: 180 },
  ]
};

// Check if position collides with any wall
export const checkWallCollision = (x, y, playerWidth = 40, playerHeight = 70) => {
  // Check each wall
  for (const wall of houseLayout.walls) {
    // Check if player rectangle overlaps with wall rectangle
    if (
      x < wall.x + wall.width &&
      x + playerWidth > wall.x &&
      y < wall.y + wall.height &&
      y + playerHeight > wall.y
    ) {
      // Check if it's a door we can walk through
      const isDoor = houseLayout.doors.some(door => 
        wall.x === door.x && 
        wall.y <= door.y && 
        wall.y + wall.height >= door.y + door.height
      );
      
      if (!isDoor) {
        return true; // Collision detected
      }
    }
  }
  return false; // No collision
};

export default function Background() {
>>>>>>> updated
]]>
</rosieEdit>

<rosieEdit file="Background.jsx">
<![CDATA[
<<<<<<< HEAD
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom, #1a2980, #26d0ce)',
      zIndex: -1
    }}>
      {/* House */}
      <div style={{
        position: 'absolute',
        left: 50,
        bottom: 50,
        width: 150,
        height: 200,
        backgroundColor: '#f9a03f',
        borderRadius: '10px 10px 0 0'
      }}>
        {/* Roof */}
        <div style={{
          position: 'absolute',
          top: -30,
          left: -10,
          width: 170,
          height: 40,
          backgroundColor: '#8f4426',
          borderRadius: '5px 5px 0 0'
        }} />
        
        {/* Door */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 55,
          width: 40,
          height: 70,
          backgroundColor: '#8f4426',
          borderRadius: '5px 5px 0 0'
        }} />
        
        {/* Windows */}
        <div style={{
          position: 'absolute',
          top: 50,
          left: 20,
          width: 30,
          height: 30,
          backgroundColor: '#e0fbfc',
          border: '4px solid #8f4426'
        }} />
        <div style={{
          position: 'absolute',
          top: 50,
          right: 20,
          width: 30,
          height: 30,
          backgroundColor: '#e0fbfc',
          border: '4px solid #8f4426'
        }} />
      </div>
      
      {/* Ground */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#3a5a40'
      }} />
    </div>
  );
}
=======
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#e0e0e0', // Indoor floor color
      zIndex: -1
    }}>
      {/* Floor pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(#d0d0d0 1px, transparent 1px), linear-gradient(90deg, #d0d0d0 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.4
      }} />
      
      {/* House Walls */}
      {houseLayout.walls.map((wall, index) => (
        <div key={`wall-${index}`} style={{
          position: 'absolute',
          left: wall.x,
          top: wall.y,
          width: wall.width,
          height: wall.height,
          backgroundColor: '#555',
          zIndex: 0
        }} />
      ))}
      
      {/* Doorways */}
      {houseLayout.doors.map((door, index) => (
        <div key={`door-${index}`} style={{
          position: 'absolute',
          left: door.x,
          top: door.y,
          width: door.width,
          height: door.height,
          backgroundColor: '#e0e0e0', // Same as floor
          zIndex: 0
        }} />
      ))}
      
      {/* Room Labels */}
      {houseLayout.rooms.map((room, index) => (
        <div key={`room-${index}`} style={{
          position: 'absolute',
          left: room.x + room.width / 2 - 40,
          top: room.y + room.height / 2 - 10,
          padding: '2px 6px',
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: '4px',
          fontSize: '12px',
          color: '#555',
          zIndex: 1
        }}>
          {room.name}
        </div>
      ))}
      
      {/* Furniture - Living Room */}
      <div style={{
        position: 'absolute',
        left: 100,
        top: 120,
        width: 100,
        height: 60,
        backgroundColor: '#8b4513',
        borderRadius: '4px', // Couch
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        left: 220,
        top: 150,
        width: 40,
        height: 40,
        backgroundColor: '#a0522d',
        borderRadius: '4px', // Chair
        zIndex: 1
      }} />
      
      {/* Furniture - Kitchen */}
      <div style={{
        position: 'absolute',
        left: 450,
        top: 80,
        width: 120,
        height: 40,
        backgroundColor: '#696969',
        borderRadius: '2px', // Counter
        zIndex: 1
      }} />
      
      {/* Furniture - Bedroom */}
      <div style={{
        position: 'absolute',
        left: 100,
        top: 300,
        width: 120,
        height: 80,
        backgroundColor: '#4682b4',
        borderRadius: '4px', // Bed
        zIndex: 1
      }} />
      
      {/* Furniture - Office */}
      <div style={{
        position: 'absolute',
        left: 400,
        top: 350,
        width: 80,
        height: 50,
        backgroundColor: '#708090',
        borderRadius: '2px', // Desk
        zIndex: 1
      }} />
      
      {/* Furniture - Bathroom */}
      <div style={{
        position: 'absolute',
        left: 600,
        top: 300,
        width: 50,
        height: 40,
        backgroundColor: '#f5f5f5',
        borderRadius: '4px', // Sink
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        left: 660,
        top: 350,
        width: 50,
        height: 60,
        backgroundColor: '#f5f5f5',
        borderRadius: '50% 50% 0 0', // Tub
        zIndex: 1
      }} />
    </div>
  );
}
>>>>>>> updated
]]>
</rosieEdit>

<rosieEdit file="Game.jsx">
<![CDATA[
<<<<<<< HEAD
import Aliens from 'Aliens';
import Background from 'Background';
=======
import Aliens from 'Aliens';
import Background, { checkWallCollision } from 'Background';
>>>>>>> updated
]]>
</rosieEdit>

<rosieEdit file="Game.jsx">
<![CDATA[
<<<<<<< HEAD
  const [playerPosition, setPlayerPosition] = useState({ x: 100, y: 350 });
=======
  const [playerPosition, setPlayerPosition] = useState({ x: 100, y: 150 }); // Start position in living room
>>>>>>> updated
]]>
</rosieEdit>

<rosieEdit file="Game.jsx">
<![CDATA[
<<<<<<< HEAD
        const newY = Math.max(prev.y - playerSpeed * deltaTime, 50);
        // Check if movement is blocked by walls (will be implemented later)
        return { ...prev, y: newY };
=======
        const newY = Math.max(prev.y - playerSpeed * deltaTime, 50);
        // Check if the new position would collide with a wall
        if (checkWallCollision(prev.x, newY)) {
          return prev; // Keep old position if collision
        }
        return { ...prev, y: newY };
>>>>>>> updated
]]>
</rosieEdit>

<rosieEdit file="Game.jsx">
<![CDATA[
<<<<<<< HEAD
        const newY = Math.min(prev.y + playerSpeed * deltaTime, window.innerHeight - 80);
        // Check if movement is blocked by walls (will be implemented later)
        return { ...prev, y: newY };
=======
        const newY = Math.min(prev.y + playerSpeed * deltaTime, window.innerHeight - 80);
        // Check if the new position would collide with a wall
        if (checkWallCollision(prev.x, newY)) {
          return prev; // Keep old position if collision
        }
        return { ...prev, y: newY };
>>>>>>> updated
]]>
</rosieEdit>

<rosieEdit file="Game.jsx">
<![CDATA[
<<<<<<< HEAD
        const newX = Math.max(prev.x - playerSpeed * deltaTime, 50);
        // Check if movement is blocked by walls (will be implemented later)
        return { ...prev, x: newX };
=======
        const newX = Math.max(prev.x - playerSpeed * deltaTime, 50);
        // Check if the new position would collide with a wall
        if (checkWallCollision(newX, prev.y)) {
          return prev; // Keep old position if collision
        }
        return { ...prev, x: newX };
>>>>>>> updated
]]>
</rosieEdit>

<rosieEdit file="Game.jsx">
<![CDATA[
<<<<<<< HEAD
        const newX = Math.min(prev.x + playerSpeed * deltaTime, window.innerWidth - 50);
        // Check if movement is blocked by walls (will be implemented later)
        return { ...prev, x: newX };
=======
        const newX = Math.min(prev.x + playerSpeed * deltaTime, window.innerWidth - 50);
        // Check if the new position would collide with a wall
        if (checkWallCollision(newX, prev.y)) {
          return prev; // Keep old position if collision
        }
        return { ...prev, x: newX };
>>>>>>> updated
]]>
</rosieEdit>

<rosieEdit file="Game.jsx">
<![CDATA[
<<<<<<< HEAD
      if (alien.x < 200) {
=======
      // Alien reaches player or gets too close to center of house
      if (
        Math.abs(alien.x - playerPosition.x) < 40 && 
        Math.abs(alien.y - playerPosition.y) < 40
      ) {
>>>>>>> updated
]]>
</rosieEdit>
</rosieArtifact>
