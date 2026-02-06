'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Send, MessageCircle, Loader2 } from 'lucide-react';

const budgetSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido').optional().or(z.literal('')),
  project_type: z.union([
    z.literal('site'),
    z.literal('sistema'),
    z.literal('loja'),
    z.literal('aplicativo'),
  ]),
  description: z.string().min(20, 'Descreva seu projeto com no mínimo 20 caracteres'),
  deadline: z.string().optional(),
  budget_range: z.string().optional(),
});

type BudgetFormData = z.infer<typeof budgetSchema>;

export default function BudgetForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetSchema),
  });

  const onSubmit = async (data: BudgetFormData) => {
    setIsSubmitting(true);
    try {
      // Futuramente: enviar para Supabase
      console.log('Form data:', data);

      // Simulando envio
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitSuccess(true);
      reset();

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { value: 'site', label: 'Site Institucional', description: 'Site para apresentar sua empresa' },
    { value: 'sistema', label: 'Sistema Web', description: 'Dashboard, CRM, ERP, etc' },
    { value: 'loja', label: 'Loja Virtual', description: 'E-commerce completo' },
    { value: 'aplicativo', label: 'Aplicativo', description: 'App mobile ou web app' },
  ];

  const budgetRanges = [
    'Até R$ 3.000',
    'R$ 3.000 - R$ 5.000',
    'R$ 5.000 - R$ 10.000',
    'Acima de R$ 10.000',
    'A definir',
  ];

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5567992429385';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um orçamento.`;

  return (
    <section id="orcamento" className="relative h-screen overflow-hidden pt-28 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="max-w-4xl mx-auto py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Telefone
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="(67) 99999-9999"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Tipo de projeto *
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {projectTypes.map((type) => (
                      <label
                        key={type.value}
                        className="relative flex items-start p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
                      >
                        <input
                          {...register('project_type')}
                          type="radio"
                          value={type.value}
                          className="mt-1 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="ml-3">
                          <div className="font-semibold text-slate-900">{type.label}</div>
                          <div className="text-sm text-slate-600">{type.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.project_type && (
                    <p className="mt-2 text-sm text-red-600">{errors.project_type.message}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-2">
                    Descrição do projeto *
                  </label>
                  <textarea
                    {...register('description')}
                    id="description"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Conte mais sobre seu projeto, funcionalidades desejadas, referências..."
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                  )}
                </div>

                {/* Deadline & Budget */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-semibold text-slate-700 mb-2">
                      Prazo desejado
                    </label>
                    <input
                      {...register('deadline')}
                      type="text"
                      id="deadline"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Ex: 30 dias"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget_range" className="block text-sm font-semibold text-slate-700 mb-2">
                      Orçamento estimado
                    </label>
                    <select
                      {...register('budget_range')}
                      id="budget_range"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecione...</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Solicitação
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    ✓ Solicitação enviada com sucesso! Retornarei em breve.
                  </div>
                )}
              </form>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                <MessageCircle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Prefere falar direto?
                </h3>
                <p className="text-slate-600 mb-6">
                  Entre em contato pelo WhatsApp e vamos conversar sobre seu projeto!
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-green-600 text-white rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">Resposta rápida</h4>
                <p className="text-sm text-slate-600">
                  Responderei sua solicitação em até 24 horas úteis com uma proposta personalizada.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
