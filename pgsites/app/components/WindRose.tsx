"use client" 
import React, { useState, useEffect, useRef } from "react";

enum rating {
    pilot,
    cp,
    ap,
}

type Site = {
    windDegStart: number,
    windDegEnd: number
    name: string,
    rating: rating
    xcOnly: boolean
} 

// Function to check if two wind ranges overlap
const rangesOverlap = (startA: number, endA: number, startB: number, endB: number): boolean => {
    return startA < endB && startB < endA; // Checks for overlap
};

// Function to organize sites into layers
const organizeSitesIntoLayers = (sites: Site[]): Site[][] => {
    // Sort sites by windDegStart
    const sortedSites = sites.sort((a, b) => a.windDegStart - b.windDegStart);

    const layers: Site[][] = [];

    for (const site of sortedSites) {
        let placed = false;

        // Check for each layer if the site can be placed
        for (const layer of layers) {
            const lastSiteInLayer = layer[layer.length - 1];

            // Check if the current site overlaps with the last site in this layer
            if (!lastSiteInLayer || !rangesOverlap(lastSiteInLayer.windDegStart, lastSiteInLayer.windDegEnd, site.windDegStart, site.windDegEnd)) {
            layer.push(site); // Add site to this layer
            placed = true;
            break;
            }
        }

        // If not placed in any layer, create a new layer
        if (!placed) {
            layers.push([site]);
        }
    }

    return layers;
};

export const WindRose = (sites: Site[] ) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
    const radius = 600;
    const canvasSize = 800;
  
    useEffect(() => {
        const layers = organizeSitesIntoLayers(sites);
        draw( layers );
    }, [sites]);

    const draw = (layers: Site[][]) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
    
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Draw background circle
        drawCircle(ctx, centerX, centerY, radius);
        
        const layerwidth = radius / layers.length; 
        let currentRadius = radius;

        // Iterate over each layer
        layers.forEach((layer, index) => {
            // Process each site in the layer
            layer.forEach(site => {
                drawPieSlice(ctx, centerX, centerY, site.windDegStart, site.windDegEnd, currentRadius) //colour
            });

            // drop one layer width
            currentRadius - layerwidth;
            drawCircle(ctx, centerX, centerY, currentRadius);
        });
        
        
    };
    
    const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, radius:number) => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#89A3B6";
        ctx.fill();
    };
    
    const drawPieSlice = (ctx: CanvasRenderingContext2D, x: number, y: number, startAngle:number, endAngle:number, radius: number) => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        console.log(startAngle, endAngle)
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = "#29465B";
        ctx.fill();
    };

    return (
        <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
    );
};



