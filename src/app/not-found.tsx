"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="flex items-center justify-center min-h-screen px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <div className="text-9xl font-display font-bold gradient-text mb-4">404</div>
                    <h1 className="text-3xl font-display font-bold mb-4">Page Not Found</h1>
                    <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
                    <Button asChild className="bg-gradient-to-r from-primary to-accent">
                        <Link href="/" className="flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Go Home
                        </Link>
                    </Button>
                </motion.div>
            </main>
        </div>
    );
}
