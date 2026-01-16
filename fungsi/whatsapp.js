// fungsi/whatsapp.js

export const openWhatsApp = (phoneNumber, message) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export const getWhatsAppMessage = (name, email, subject, customMessage) => {
  const defaultMessage = `Halo, saya ${name} (${email}) tertarik dengan portofolio Anda.\n\nSubjek: ${subject}\n\nPesan: ${customMessage}\n\nMohon hubungi saya kembali.`;
  return defaultMessage;
};