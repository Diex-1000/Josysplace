'use client';

import * as React from 'react';
import emailjs from '@emailjs/browser';
import { Mail } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLICKEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Footer() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const trigger = (
    <Button
      variant="ghost"
      className="flex items-center gap-2 text-slate-300 hover:text-white"
    >
      <Mail className="h-5 w-5" />
      Email
    </Button>
  );

  /* ───────────────────────── Desktop ───────────────────────── */
  if (isDesktop) {
    return (
      <footer className="w-full bg-slate-800">
        <Dialog open={open} onOpenChange={setOpen}>
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-center">
            <DialogTrigger asChild>{trigger}</DialogTrigger>
          </div>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Send us an email</DialogTitle>
              <DialogDescription>
                We&apos;ll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <ContactForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </footer>
    );
  }

  /* ───────────────────────── Mobile / Tablet ───────────────────────── */
  return (
    <footer className="w-full bg-slate-800">
      <Drawer open={open} onOpenChange={setOpen}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-center">
          <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        </div>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Send us an email</DrawerTitle>
            <DrawerDescription>
              We&apos;ll get back to you as soon as possible.
            </DrawerDescription>
          </DrawerHeader>
          <ContactForm className="px-4" onSuccess={() => setOpen(false)} />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </footer>
  );
}

/* ───────────────────────── Form ───────────────────────── */
function ContactForm({ className, onSuccess }) {
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    email: '',
    name: '',
    message: '',
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!SERVICE || !TEMPLATE || !PUBLICKEY) return;
    setLoading(true);
    try {
      await emailjs.send(SERVICE, TEMPLATE, values, { publicKey: PUBLICKEY });
      console.log('✅ Email sent successfully');
      setValues({ email: '', name: '', message: '' });
      onSuccess?.();
    } catch (err) {
      console.error('❌ Email send failed', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn('grid gap-4', className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Your email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Your name"
          value={values.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="How can we help?"
          className="w-full rounded-md border border-slate-300 bg-transparent p-2 text-sm text-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
          value={values.message}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? 'Sending…' : 'Send'}
      </Button>
    </form>
  );
}
