'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Users, Home, Mail, User, Check, ChevronRight } from 'lucide-react';
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ReserveFormProps {
  selectedVilla: string;
  onVillaChange: (villa: string) => void;
}

const ReserveForm = ({ selectedVilla, onVillaChange }: ReserveFormProps) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 5)),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-black/5 overflow-hidden relative">
      <form onSubmit={handleSubmit} className="p-8 md:p-16 space-y-10">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Period */}
                <div className="space-y-3 md:col-span-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest font-bold text-[#191c1e]/40 ml-4">The Period</label>
                  <Popover>
                    <PopoverTrigger
                      className={cn(
                        "w-full bg-[#f7f9fb] border border-black/5 rounded-full px-14 py-5 font-sans text-xs text-left focus:outline-none focus:ring-1 focus:ring-[#775a19]/20 transition-all flex items-center relative group cursor-pointer",
                        !date && "text-[#191c1e]/20"
                      )}
                    >
                      <CalendarIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#775a19]" />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "MMM dd")} — {format(date.to, "MMM dd, yyyy")}
                          </>
                        ) : (
                          format(date.from, "MMM dd, yyyy")
                        )
                      ) : (
                        <span>Check availability</span>
                      )}
                      <ChevronRight className="absolute right-6 w-3 h-3 opacity-20 group-hover:translate-x-1 transition-transform" />
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 border-none shadow-2xl rounded-3xl" align="start">
                      <Calendar
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                        className="bg-white rounded-3xl p-6"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Guests */}
                <div className="">
                  <label className="font-sans text-[10px] uppercase tracking-widest font-bold text-[#191c1e]/40 ml-4">Guests</label>
                  <Select defaultValue="2 Adults">
                    <SelectTrigger className="w-full bg-[#f7f9fb] border-black/5 rounded-full px-14 py-7 font-sans text-xs focus:ring-[#775a19]/20 shadow-none h-auto relative group transition-all hover:bg-black/[0.02]">
                      <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#775a19]" />
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-black/5 shadow-2xl p-1">
                      <SelectItem value="1 Adult" className="rounded-xl focus:bg-[#775a19]/10 focus:text-[#775a19]">1 Adult</SelectItem>
                      <SelectItem value="2 Adults" className="rounded-xl focus:bg-[#775a19]/10 focus:text-[#775a19]">2 Adults</SelectItem>
                      <SelectItem value="4 Adults" className="rounded-xl focus:bg-[#775a19]/10 focus:text-[#775a19]">4 Adults</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Villa Tier */}
                <div className="space-y-3">
                  <label className="font-sans text-[10px] uppercase tracking-widest font-bold text-[#191c1e]/40 ml-4">Villa Tier</label>
                  <Select value={selectedVilla} onValueChange={(val) => val && onVillaChange(val)}>
                    <SelectTrigger className="w-full bg-[#f7f9fb] border-black/5 rounded-full px-14 py-7 font-sans text-xs focus:ring-[#775a19]/20 shadow-none h-auto relative group transition-all hover:bg-black/[0.02]">
                      <Home className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#775a19]" />
                      <SelectValue placeholder="Select villa" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-black/5 shadow-2xl p-1">
                      <SelectItem value="Horizon Villa" className="rounded-xl focus:bg-[#775a19]/10 focus:text-[#775a19]">Horizon Villa</SelectItem>
                      <SelectItem value="Serene Suite" className="rounded-xl focus:bg-[#775a19]/10 focus:text-[#775a19]">Serene Suite</SelectItem>
                      <SelectItem value="Sunset Studio" className="rounded-xl focus:bg-[#775a19]/10 focus:text-[#775a19]">Sunset Studio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 ">
                  <div className="h-px bg-black/5 w-full" />
                </div>


              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full h-16 bg-[#191c1e] text-white rounded-full font-sans text-[10px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(25,28,30,0.1)] hover:-translate-y-1 disabled:opacity-50"
              >
                <span className="relative z-10">{isSubmitting ? 'Verifying Sanctuary...' : 'Confirm Reservation'}</span>
                <div className="absolute inset-0 bg-[#775a19] transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center space-y-6"
            >
              <div className="w-20 h-20 rounded-full bg-[#775a19]/10 flex items-center justify-center border border-[#775a19]/20">
                <Check className="w-8 h-8 text-[#775a19]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-4xl italic text-[#191c1e]">Journey Awaits.</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-[#191c1e]/40">Your request has been received by our concierge.</p>
              </div>
              <Link
                href="/"
                className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#775a19] hover:opacity-70 transition-opacity"
              >
                Return to Home
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ReserveForm;
