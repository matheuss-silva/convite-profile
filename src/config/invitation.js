// ============================================================
// ARQUIVO DE CONFIGURAÇÃO DO CONVITE
// Altere aqui todos os textos, fotos e dados do evento.
// Nenhuma outra parte do código precisa ser tocada para
// personalizar o convite.
// ============================================================

export const invitationData = {
  graduate: {
    name: "Adelaide Mayara",
    course: "Bacharelado em Farmácia",
    institution: "NOME DA INSTITUIÇÃO",
    classYear: "2026",
  },

  texts: {
    slideHint: "Deslize para conhecer esta história",

    openingQuote:
      "O diploma marca o fim de uma etapa, mas a verdadeira conquista foi seguir em frente mesmo quando pensei que não conseguiria.",
    openingQuoteHighlights: ["fim de uma etapa", "verdadeira conquista"],

    journeyTitle: "Uma história construída com coragem",
    journeyText:
      "Entre desafios, escolhas, renúncias e aprendizados, esta conquista foi sendo construída um dia de cada vez.",

    parentsTitle: "Aos meus pais",
    parentsMessage:
      "Se hoje realizo este sonho, é porque antes dele existiram dois corações que nunca deixaram de acreditar em mim. Esta conquista também pertence a vocês.",
    parentsSecondaryMessage:
      "Cada renúncia de vocês abriu caminho para que eu pudesse chegar até aqui. Meu diploma também leva o nome de quem sempre segurou a minha mão.",
    parentsSignature:
      "Meu coração transborda de gratidão. Esta vitória carrega o nome, o amor e os sacrifícios de vocês.",

    familyQuote: "Essa conquista é nossa.",
    familyQuoteHighlight: "nossa",
    familyMessage:
      "Em cada etapa, encontrei em vocês força, apoio e motivos para continuar.",

    sonTitle: "Ao meu filho",
    sonMessage:
      "Você não foi um obstáculo na minha caminhada. Foi a razão pela qual eu nunca desisti. Cada página estudada, cada noite em claro e cada lágrima tiveram um único propósito: construir um futuro do qual você possa se orgulhar.",
    sonHighlights: ["a razão", "nunca desisti", "um futuro"],
    sonSignature: "Por você e para você.",

    centralMessage:
      "Mais do que uma formatura, este convite celebra uma vida transformada pela perseverança. Cada obstáculo fortaleceu meus passos, cada lágrima teve um propósito e cada pessoa que caminhou comigo faz parte desta conquista.",
    centralHighlights: [
      "uma vida transformada pela perseverança",
      "Cada obstáculo fortaleceu meus passos",
      "cada lágrima teve um propósito",
      "cada pessoa que caminhou comigo",
    ],

    transitionText: "Agora é hora de celebrar.",

    countdownTitle: "Falta pouco para este momento",
    countdownTitleToday: "Hoje é o grande dia!",

    buttonsTitle: "Informações para o grande dia",

    finalQuote: "Esta conquista também pertence a vocês.",
    finalMessage:
      "Espero por vocês para celebrarmos juntos o encerramento de uma etapa e o início de uma nova história.",
    finalSignatureQuote: "A felicidade só é completa quando compartilhada.",
    confirmationButton: "Confirmar presença",
    confirmationMessage:
      "Olá! Confirmo minha presença e estou muito feliz por celebrar este momento tão especial com você. Até lá!",
  },

  event: {
    title: "Cerimônia de Formatura",
    date: "2026-08-08",
    startTime: "19:00",
    endTime: "22:00",
    weekday: "Sábado",
    venue: "Auditório ATM",
    address: "",
    city: "Palmas - TO",
    mapsUrl: "https://maps.app.goo.gl/Ero8pZR5o4JSjCbe6",
    whatsapp: "556384407251",
  },

  timeline: {
    enabled: false,
    items: [
      { time: "18:30", title: "Recepção dos convidados" },
      { time: "19:00", title: "Início da cerimônia" },
      { time: "21:00", title: "Encerramento" },
      { time: "22:00", title: "Celebração" },
    ],
  },

  photos: {
    cover: "/images/capa-formanda.jpeg",
    graduatePortrait: "/images/formanda-retrato.jpeg",
    parents: "/images/formanda-com-pais.jpeg",
    family: "/images/formanda-com-familia.jpeg",
    son: "/images/formanda-com-filho.jpeg",
    transition: "/images/formanda-transicao.jpeg",
    final: "/images/foto-final.jpeg",
    gallery: [
      "/images/galeria-01.jpeg",
      "/images/galeria-02.jpeg",
      "/images/galeria-03.jpeg",
      "/images/galeria-04.jpeg",
      "/images/galeria-05.jpeg",
      "/images/galeria-06.jpeg",
    ],
  },

  // object-position individual por foto, caso alguma imagem precise
  // de reposicionamento para evitar cortes indevidos de rosto/mãos.
  photoPositions: {
    cover: "center top",
    graduatePortrait: "center center",
    parents: "center center",
    family: "center center",
    son: "center 15%",
    transition: "center center",
    final: "center center",
  },
};

export default invitationData;
