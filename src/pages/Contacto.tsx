
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { createClient } from '@supabase/supabase-js';

// Crear cliente de Supabase utilizando las variables de entorno de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insertar el mensaje en la tabla contactos de Supabase
      const { error } = await supabase
        .from('contactos')
        .insert([
          { 
            nombre: formData.nombre, 
            email: formData.email, 
            mensaje: formData.mensaje,
            fecha: new Date().toISOString()
          }
        ]);
      
      if (error) {
        throw error;
      }
      
      // Llamar a la función Edge para enviar el correo
      const { error: functionError } = await supabase.functions.invoke('enviar-correo-contacto', {
        body: {
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje,
          destinatario: 'dig1asir@gmail.com'
        }
      });
      
      if (functionError) {
        throw functionError;
      }

      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto. ¡Gracias!",
      });
      
      // Limpiar el formulario después del envío exitoso
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      toast({
        title: "Error al enviar el mensaje",
        description: "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Contacta con Nosotros
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <Input
              id="nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <Textarea
              id="mensaje"
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              required
              className="w-full h-32"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
