"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
} from "react-icons/fa";
import {
  MdOutlineBalcony,
  MdOutlineKitchen,
  MdOutlineMicrowave,
  MdIron,
} from "react-icons/md";

const formSchema = z.object({
  email: z.string().email({ message: "Correo no válido" }),
  name: z.string().min(2, { message: "Ingresa tu nombre" }),
  fechaInicio: z.string().min(1, { message: "Requerido" }),
  fechaFin: z.string().min(1, { message: "Requerido" }),
});

const DEPARTAMENTO_ID = "664113b1e304f37b0a3f3f3f";

export default function Reservaciones2() {
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
      const res = await fetch("https://backend-admindepts.onrender.com/api/reservaciones", {
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
        throw new Error(err.message || "Error en la reservación");
      }

      const data = await res.json();
      alert("Reservación enviada con éxito");
      console.log(data);
      form.reset();
    } catch (err) {
      alert("Error: " + err.message);
    }
  }

  return (
    <div className="flex justify-center items-center py-16 px-4 bg-[#e6ecf2]">
      <div className="grid lg:grid-cols-2 gap-10 mt-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            1 King Bed Deluxe Courtyard View
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Lose yourself in the comfort of our Deluxe Suites. This spacious 388 sq ft. room is equipped with a King size bed,
            a sofa, and a practical coffee table. In it, you can let yourself be carried away in a whirlpool of elegance and
            comfort, where every corner is an invitation to intimacy and complicity. It includes a microwave and a small
            refrigerator. Even the television becomes a canvas for your dreams.
          </p>
        </div>

        {/* Características */}
        <div className="border-t lg:border-t-0 lg:border-l border-slate-300 pl-0 lg:pl-10 pt-6 lg:pt-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Room highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-sm">
            <p className="flex items-center gap-2"><FaBaby /> Crib</p>
            <p className="flex items-center gap-2"><MdOutlineMicrowave /> Microwave</p>
            <p className="flex items-center gap-2"><FaWifi /> Wifi</p>
            <p className="flex items-center gap-2"><FaFan /> Fan</p>
            <p className="flex items-center gap-2"><FaSwimmer /> Pool access</p>
            <p className="flex items-center gap-2"><FaConciergeBell /> Concierge</p>
            <p className="flex items-center gap-2"><FaTv /> TV</p>
            <p className="flex items-center gap-2"><MdOutlineBalcony /> Balcony</p>
            <p className="flex items-center gap-2"><FaDumbbell /> Gym</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Reservación
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Juan Pérez" {...field} />
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
                    <Input type="email" placeholder="correo@ejemplo.com" {...field} />
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
                  <FormLabel className="text-gray-700">Fecha de inicio</FormLabel>
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
                  <FormLabel className="text-gray-700">Fecha final</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700">
              Enviar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}