"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  FaSnowflake,
  FaWifi,
  FaSwimmer,
  FaConciergeBell,
  FaCoffee,
  FaUtensils,
  FaHotTub,
  FaDumbbell,
  FaTv,
  FaFan,
  FaBaby,
  FaParking,
  FaShower,
  FaDoorOpen,
  FaKey,
  FaEye,
  FaLock,
  FaCouch,
  FaBroom,
  FaToiletPaper,
  FaSoap,
  FaBed,
  FaChair,
  FaCutlery,
  FaGlassMartiniAlt,
  FaBan
} from "react-icons/fa";
import {
  MdOutlineBalcony,
  MdOutlineKitchen,
  MdOutlineMicrowave,
  MdIron,
  MdOutlineSecurity,
  MdOutlineBedroomParent,
  MdOutlineCurtains,
  MdOutlineDryCleaning,
  MdOutlineCleaningServices,
  MdOutlineNoPhotography,
} from "react-icons/md";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  name: z.string().min(2, { message: "Enter your name" }),
  fechaInicio: z.string().min(1, { message: "Required" }),
  fechaFin: z.string().min(1, { message: "Required" }),
});

const DEPARTAMENTO_ID = "664113b1e304f37b0a3f3f3f";

export default function Reservaciones1() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      fechaInicio: "",
      fechaFin: "",
    },
  });

  async function onSubmit(values) {
    try {
      const res = await fetch("http://localhost:8000/api/reservaciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          departamento: DEPARTAMENTO_ID,
          fechaInicio: values.fechaInicio,
          fechaFin: values.fechaFin,
          nombre: values.name,
          contacto: values.email,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Reservation error");
      }

      const data = await res.json();
      alert("Reservation submitted successfully");
      console.log(data);
      form.reset();
    } catch (err) {
      alert("Error: " + err.message);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 px-6 lg:px-24 py-10 bg-[#e6ecf2]">
      <div className="flex-1 space-y-10">
        <section>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            The-bedroom apartment
          </h1>
          <p className="text-gray-700">
            4 guests • 1 room • 2 beds • 2 bathrooms
          </p>
        </section>

        <hr className="mt-[7.5rem] max-md:mt-10 w-full border-t border-slate-900" />

        <div className="mt-10 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">What this place offers</h2>

          {/* Compact Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800 text-base md:text-lg">
            <p className="flex items-center gap-3"><FaWifi /> Wifi</p>
            <p className="flex items-center gap-3"><MdOutlineKitchen /> Kitchen</p>
            <p className="flex items-center gap-3"><FaTv /> TV</p>
            <p className="flex items-center gap-3"><FaParking /> Free parking</p>
            <p className="flex items-center gap-3"><FaSwimmer /> Pool</p>
            <p className="flex items-center gap-3"><MdOutlineBalcony /> Balcony</p>
          </div>

          {/* Full Amenities Below (hidden until scrolled) */}
          <div id="all-amenities" className="space-y-10 pt-10">
            <div>
              <h3 className="text-lg font-semibold mb-2">Bathroom</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800 text-base md:text-lg">
                <p className="flex items-center gap-3"><FaShower /> Shower</p>
                <p className="flex items-center gap-3"><FaFan /> Hair dryer</p>
                <p className="flex items-center gap-3"><FaBroom /> Cleaning products</p>
                <p className="flex items-center gap-3"><FaSoap /> Shampoo</p>
                <p className="flex items-center gap-3"><FaSoap /> Body soap</p>
                <p className="flex items-center gap-3"><FaHotTub /> Hot water</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Bedroom & Laundry</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800 text-base md:text-lg">
                <p className="flex items-center gap-3"><FaBed /> Essentials</p>
                <p className="flex items-center gap-3"><FaToiletPaper /> Towels, sheets, toilet paper</p>
                <p className="flex items-center gap-3"><FaChair /> Hangers</p>
                <p className="flex items-center gap-3"><MdOutlineBedroomParent /> Bed linens</p>
                <p className="flex items-center gap-3"><MdOutlineCurtains /> Blackout curtains</p>
                <p className="flex items-center gap-3"><MdIron /> Iron</p>
                <p className="flex items-center gap-3"><FaFan /> Mosquito net</p>
              </div>
            </div>
          </div>

          <section className="pt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Description
            </h2>
            <p className="text-gray-700">
              Enjoy this newly remodeled vacation home with a private pool. It's within walking distance of a shopping plaza with a supermarket, movie theater, restaurants, and more. It's a 10-minute drive to downtown Mérida and Paseo de Montejo. It's also a 5-minute drive from the gastronomic and tourist walkway and La Plancha Park.
            </p>
          </section>
        </div>
      </div>

      <div className="sticky top-20 self-start bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Booking
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fechaInicio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Start date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fechaFin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">End date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
