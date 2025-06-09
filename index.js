import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function MindMapGPT() {
  const [topic, setTopic] = useState("");
  const [mindMap, setMindMap] = useState(null);

  const generateMindMap = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify({ topic })
    });ssssssssss
    const data = await res.json();
    setMindMap(data);aaa
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">MindMapGPT</h1>
      <input
        type="text"
        placeholder="Enter a topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <Button onClick={generateMindMap}>Generate Mind Map</Button>
      <div className="mt-6">
        {mindMap && (
          <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">
            {JSON.stringify(mindMap, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
