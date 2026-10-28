// Dados do profissional.
// Troque os valores abaixo pelos dados reais: eles aparecem em todas as páginas.
// Enquanto `placeholder` for true, os campos aparecem com contorno violeta tracejado.

export const profissional = {
  placeholder: true,
  nome: 'Luis Dorvillé',
  titulo: 'Psicólogo(a)',
  crp: '15/04515',
  instituicao: 'Cesmac',
  percurso: 'experiências clínicas, institucionais ou comunitárias',
  // Somente dígitos, com DDI e DDD. Ex.: 5581999999999
  whatsapp: '5582981462725',
  // Como o número aparece escrito na página
  whatsappExibicao: '+55 (82) 98146-2725',
};

export const linkWhatsApp = (mensagem = 'Olá! Gostaria de conversar sobre o acompanhamento psicológico.') =>
  `https://wa.me/${profissional.whatsapp}?text=${encodeURIComponent(mensagem)}`;
