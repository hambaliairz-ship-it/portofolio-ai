import React, { useState } from 'react';
import Text from '../komponen/atom/text/Text';
import Form from '../komponen/molekul/form/Form';
import Button from '../komponen/atom/button/Button';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { t } = useLanguage();

  const contactFields = [
    { id: 'name', label: t.contact.form.name, type: 'text', placeholder: t.contact.form.namePh, required: true },
    { id: 'email', label: t.contact.form.email, type: 'email', placeholder: t.contact.form.emailPh, required: true },
    { id: 'subject', label: t.contact.form.subject, type: 'text', placeholder: t.contact.form.subjectPh, required: true },
    { id: 'message', label: t.contact.form.message, type: 'textarea', placeholder: t.contact.form.messagePh, required: true }
  ];

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);

    // Format message for WhatsApp
    const message = `*Pesan Baru dari Portofolio*\n\n` +
      `*Nama:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subjek:* ${formData.subject}\n` +
      `*Pesan:* ${formData.message}`;

    const phoneNumber = '628984467124';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Simulate short delay for UX then redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.open(whatsappUrl, '_blank');

      // Reset success message
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  // WhatsApp integration function.
  const openWhatsApp = () => {
    const phoneNumber = '628984467124'; // Ganti dengan nomor WhatsApp Anda
    const message = encodeURIComponent('Halo, saya tertarik dengan portofolio Anda dan ingin mendiskusikan peluang kerja...');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Text variant="h2" className="text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </Text>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <Text variant="h3" className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.subtitle}
              </Text>
              <Text className="text-gray-600 dark:text-gray-300 mb-8">
                {t.contact.desc}
              </Text>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400">📧</span>
                  </div>
                  <div className="ml-4">
                    <Text variant="large" className="font-medium text-gray-900 dark:text-white">
                      {t.contact.info.email}
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400">
                      hambaliairz@gmail.com
                    </Text>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="shrink-0 h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400">📱</span>
                  </div>
                  <div className="ml-4">
                    <Text variant="large" className="font-medium text-gray-900 dark:text-white">
                      {t.contact.info.whatsapp}
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400">
                      +62 898-446-7124
                    </Text>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="shrink-0 h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400">📍</span>
                  </div>
                  <div className="ml-4">
                    <Text variant="large" className="font-medium text-gray-900 dark:text-white">
                      {t.contact.info.location}
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400">
                      Serang Banten, Indonesia
                    </Text>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={openWhatsApp}
                  className="w-full"
                >
                  {t.contact.whatsappBtn}
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 dark:text-green-400 text-2xl">✓</span>
                  </div>
                  <Text variant="h3" className="text-gray-900 dark:text-white mb-2">
                    {t.contact.form.success}
                  </Text>
                  <Text className="text-gray-600 dark:text-gray-300">
                    {t.contact.form.successDesc}
                  </Text>
                </div>
              ) : (
                <Form
                  fields={contactFields}
                  onSubmit={handleSubmit}
                  submitLabel={isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                  className=""
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;