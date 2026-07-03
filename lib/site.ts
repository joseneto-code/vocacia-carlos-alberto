export const site = {
  name: "Advocacia Carlos Alberto",
  lawyer: "Dr. Carlos Alberto",
  oab: "OAB/MS 28343",
  url: "https://henriquecarlosalberto.adv.br",
  publicBasePath: process.env.NODE_ENV === "production" ? "/vocacia-carlos-alberto" : "",
  // Telefone usado para chamadas e WhatsApp (formato internacional, sem símbolos)
  whatsapp: "556784458320",
  phoneDisplay: "+55 67 8445-8320",
  whatsappMessage:
    "olá, vim pelo site e gostaria de falar com um advogado criminal",
  email: "carlosjsjr.jus@gmail.com",
  address: {
    line1: "R. Melânio García Barbosa, 300 - Sl 2 - Centro",
    line2: "Maracaju - MS, 79150-011",
    maps: "https://www.google.com/maps?q=R.+Mel%C3%A2nio+Garc%C3%ADa+Barbosa+300+Sl+2+Centro+Maracaju+MS+79150-011",
    embed:
      "https://www.google.com/maps?q=R.+Mel%C3%A2nio+Garc%C3%ADa+Barbosa+300+Sl+2+Centro+Maracaju+MS+79150-011&output=embed",
  },
} as const

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export function publicAsset(path: string) {
  return `${site.publicBasePath}${path}`
}
