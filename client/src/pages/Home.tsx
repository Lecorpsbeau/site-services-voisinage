import { Phone, MessageSquare, Check, ShieldCheck, Clock, CreditCard, Sparkles, Star, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useLocation } from "wouter";

// Liens de contact à personnaliser si nécessaire
const PHONE_NUMBER = "+33762302108";
const WHATSAPP_LINK = "https://wa.me/33762302108?text=Bonjour%20Augustin,%20je%20souhaiterais%20en%20savoir%20plus%20sur%20vos%20services%20de%20proximit%C3%A9.";
const EMAIL_ADDRESS = "augustin.courault@gmail.com";
const EMAIL_LINK = "mailto:augustin.courault@gmail.com?subject=Demande%20de%20service%20de%20voisinage&body=Bonjour%20Augustin,%20je%20souhaiterais%20en%20savoir%20plus%20sur%20vos%20services%20de%20proximit%C3%A9.";

// Données des services
const services = [
  {
    category: "INTÉRIEUR & BRICOLAGE",
    color: "border-amber-200 bg-amber-50/40 text-amber-900",
    badgeColor: "bg-amber-100 text-amber-800",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663707587211/5BokS7tBpE5YKNc5Am6ooH/service-diy-Ttm8hpdHeeQ9AhZD6j6jR8.webp",
    items: [
      {
        title: "Aide au rangement / Organisation",
        description: "Tri complet, rangement optimisé et nettoyage de votre garage, cave, grenier ou abri de jardin.",
        price: "À partir de 10 € / heure",
        targetId: "realisations"
      },
      {
        title: "Petites réparations & Montage",
        description: "Fixer un cadre, changer une ampoule, monter un meuble en kit, installer une étagère ou réparer un loquet.",
        price: "Tarif sur devis selon la tâche",
        targetId: "realisations"
      }
    ]
  },
  {
    category: "JARDINAGE & EXTÉRIEUR",
    color: "border-emerald-200 bg-emerald-50/40 text-emerald-900",
    badgeColor: "bg-emerald-100 text-amber-800",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663707587211/5BokS7tBpE5YKNc5Am6ooH/service-garden-fqhRWZ66WcMBXspvkHwu2s.webp",
    items: [
      {
        title: "Entretien de base de vos espaces",
        description: "Tonte de pelouse, ramassage des feuilles mortes, désherbage des allées et petits arrosages.",
        price: "À partir de 15 € / heure",
        targetId: "realisations"
      },
      {
        title: "Nettoyage extérieur au Kärcher",
        description: "Lavage haute pression de votre terrasse, de vos allées de jardin, murets ou salon de jardin. Matériel fourni.",
        price: "Forfait selon la surface",
        targetId: "realisations"
      }
    ]
  },
  {
    category: "ANIMAUX DE COMPAGNIE",
    color: "border-rose-200 bg-rose-50/40 text-rose-900",
    badgeColor: "bg-rose-100 text-rose-800",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663707587211/5BokS7tBpE5YKNc5Am6ooH/service-pets-ArMiDKQL84LybvU8aLhrAM.webp",
    items: [
      {
        title: "Visite de confiance à domicile",
        description: "Présence de 30 à 45 min pour donner la nourriture, changer la litière ou l'eau, brosser et jouer avec votre animal.",
        price: "10 € la visite",
        targetId: "realisations"
      },
      {
        title: "Promenade de chien de quartier",
        description: "Balade dynamique de 30 à 45 min dans le quartier pour le bien-être et les besoins de votre compagnon.",
        price: "10 € la balade",
        targetId: "realisations"
      }
    ]
  },
  {
    category: "LOGISTIQUE & QUOTIDIEN",
    color: "border-sky-200 bg-sky-50/40 text-sky-900",
    badgeColor: "bg-sky-100 text-sky-800",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663707587211/5BokS7tBpE5YKNc5Am6ooH/service-errands-SHtUin8D9S5tqFYnrKGNsx.webp",
    items: [
      {
        title: "Courses de proximité livrées",
        description: "Achat de vos courses au supermarché local selon votre liste et livraison directement sur votre table de cuisine.",
        price: "15 € la course",
        targetId: "realisations"
      },
      {
        title: "Récupération & Dépôt de colis",
        description: "Trajet rapide à la Poste, au point relais ou casier de quartier pour retirer ou envoyer vos colis sans attente.",
        price: "10 € le trajet",
        targetId: "realisations"
      },
      {
        title: "Baby-sitting & Garde d'enfants",
        description: "Garde active à votre domicile, aide aux devoirs, préparation du goûter ou du dîner et jeux de société en toute sécurité.",
        price: "À partir de 15 € / heure",
        targetId: "realisations"
      }
    ]
  }
];

const argumentsConfiance = [
  {
    icon: <MapPin className="h-6 w-6 text-emerald-700 shrink-0" />,
    title: "Zéro frais de déplacement",
    description: "J'habite le quartier ! Pas de surcoût inutile de transport, je viens directement à pied ou à vélo."
  },
  {
    icon: <Clock className="h-6 w-6 text-amber-700 shrink-0" />,
    title: "Sérieux, ponctuel & équipé",
    description: "J'arrive à l'heure convenue avec mon propre matériel de jardinage de qualité et mon nettoyeur haute pression Kärcher."
  },
  {
    icon: <CreditCard className="h-6 w-6 text-rose-700 shrink-0" />,
    title: "Paiement simple & transparent",
    description: "Les tarifs sont clairs, annoncés avant l'intervention et sans aucune mauvaise surprise à la fin."
  }
];

export default function Home() {
  // 👈 LE HOOK EST BIEN PLACÉ ICI À L'INTÉRIEUR DU COMPOSANT
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2E2520] pb-12 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <header className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 to-transparent pt-8 pb-12">
        <div className="container max-w-md mx-auto px-4 text-center">
          {/* Badge de localisation */}
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 mb-6 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Votre voisin de confiance disponible aujourd'hui
          </div>

          {/* Titre accrocheur */}
          <h1 className="text-3xl sm:text-4xl font-black text-[#1E3F20] tracking-tight leading-[1.15] mb-4">
            Augustin, votre voisin multi-services
          </h1>

          {/* Sous-titre rassurant */}
          <p className="text-sm sm:text-base text-[#4E4540] leading-relaxed mb-8 max-w-sm mx-auto">
            Bonjour, je m'appelle Augustin ! Besoin d'un coup de main pour votre maison, votre jardin ou vos animaux ? J'habite le quartier et je vous propose des services rapides, sérieux et sans frais de déplacement.
          </p>

          {/* Boutons d'action principaux (CTA) */}
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            {/* 👈 LE BOUTON INTERACTIF "QUI SUIS-JE" TROUVE SA PLACE ICI */}
            <Button
              onClick={() => setLocation("/about")}
              variant="outline"
              className="w-full py-6 text-base font-bold bg-white hover:bg-[#FAF6F0] text-[#1E3F20] border-2 border-[#1E3F20] rounded-xl shadow-sm transition-all active:scale-[0.97] duration-150 flex items-center justify-center gap-2 mb-2"
            >
              ✨ Découvrir qui je suis (Qui suis-je ?)
            </Button>

            {/* CTA Téléphone */}
            <Button
              asChild
              className="w-full py-6 text-base font-bold bg-[#1E3F20] hover:bg-[#1E3F20]/90 text-[#FAF6F0] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.97] duration-150 flex items-center justify-center gap-3 border border-emerald-950"
            >
              <a href={`tel:${PHONE_NUMBER}`}>
                <Phone className="h-5 w-5 shrink-0" />
                M'appeler maintenant
              </a>
            </Button>

            {/* CTA WhatsApp */}
            <Button
              asChild
              variant="outline"
              className="w-full py-6 text-base font-bold bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.97] duration-150 flex items-center justify-center gap-3 border-0"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-5 w-5 shrink-0 fill-current" />
                Discuter sur WhatsApp
              </a>
            </Button>

            {/* CTA E-mail */}
            <Button
              asChild
              className="w-full py-6 text-base font-bold bg-[#C86446] hover:bg-[#C86446]/90 text-[#FAF6F0] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.97] duration-150 flex items-center justify-center gap-3 border border-[#B04C30]"
            >
              <a href={EMAIL_LINK}>
                <Mail className="h-5 w-5 shrink-0" />
                M'envoyer un e-mail
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* 2. SECTION SERVICES & TARIFS */}
      <main className="container max-w-md mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#1E3F20]">Mes services & tarifs</h2>
          <Badge className="bg-amber-100 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold px-2.5 py-0.5">
            Matériel fourni
          </Badge>
        </div>

        {/* Liste des cartes de services */}
        <div className="space-y-8">
          {services.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border border-amber-100 shrink-0 shadow-xs">
                  <img src={section.image} alt={section.category} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-extrabold tracking-wider text-emerald-800 uppercase block">
                    Catégorie
                  </span>
                  <h3 className="text-lg font-bold text-[#1E3F20] tracking-tight">
                    {section.category}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <Card key={itemIdx} className="border border-[#FAF6F0] bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-sm transition-all duration-200">
                    <CardContent className="p-4 flex flex-col justify-between gap-3">
                      <div>
                        <h4 className="font-bold text-sm text-[#2E2520] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#5E5550] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-amber-50/80">
                        <span className="text-xs text-[#8E8580] font-medium">Mon tarif :</span>
                        <Badge className="bg-emerald-50 hover:bg-emerald-50 text-[#1E3F20] border border-emerald-100 text-xs font-bold px-3 py-1 rounded-lg">
                          {item.price}
                        </Badge>
                      </div>
                      <div className="pt-2 flex justify-end">
                        <a
                          href={`#${item.targetId}`}
                          className="text-[11px] font-semibold text-[#C86446] hover:text-[#B04C30] transition-colors flex items-center gap-1 hover:underline"
                        >
                          <Sparkles className="h-3 w-3 shrink-0" />
                          Voir un exemple de travail réalisé
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section id="realisations" className="mt-16 scroll-mt-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#1E3F20]">Travaux réalisés</h2>
            <Badge className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs px-2.5 py-0.5">
              En images
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Card className="border border-amber-100 bg-white rounded-xl overflow-hidden shadow-xs">
              <div className="aspect-square bg-amber-50 relative overflow-hidden">
                <img src="/jardin1.jpg" alt="Tonte pelouse" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-3">
                <h3 className="font-bold text-xs text-[#2E2520]">Tonte & Désherbage</h3>
              </CardContent>
            </Card>

            <Card className="border border-amber-100 bg-white rounded-xl overflow-hidden shadow-xs">
              <div className="aspect-square bg-amber-50 relative overflow-hidden">
                <img src="/karcher1.jpg" alt="Nettoyage terrasse" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-3">
                <h3 className="font-bold text-xs text-[#2E2520]">Nettoyage Kärcher</h3>
                <p className="text-[11px] text-[#5E5550] mt-0.5">Terrasse pavée (25m²)</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16 bg-white/60 border border-amber-100 rounded-2xl p-6 shadow-xs space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold text-[#1E3F20]">Pourquoi faire appel à moi ?</h2>
            <p className="text-xs text-[#5E5550]">La confiance et l'efficacité d'un vrai service de voisinage</p>
          </div>

          <div className="space-y-4">
            {argumentsConfiance.map((arg, idx) => (
              <div key={idx} className="flex gap-3 items-start bg-white/80 p-3 rounded-xl border border-amber-50/50">
                <div className="p-2 rounded-lg bg-[#FAF6F0]">
                  {arg.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1E3F20] mb-0.5">{arg.title}</h3>
                  <p className="text-xs text-[#5E5550] leading-relaxed">{arg.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 4. PIED DE PAGE & ZONE D'ACTION FIXE */}
      <footer className="mt-12 py-8 bg-[#1E3F20] text-amber-50/80 text-center text-xs space-y-6 border-t border-emerald-950 pb-16">
        <div className="container max-w-md mx-auto px-4 space-y-4">
          <div>
            <p className="font-bold text-amber-100 text-base mb-1">Augustin Courault</p>
            <p className="text-[11px] text-amber-100/70">Votre voisin de confiance à votre service</p>
          </div>

          <div className="flex flex-col items-center gap-2 pt-2 text-[12px] text-amber-100/85">
            <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors flex items-center gap-1.5 font-medium">
              <Phone className="h-3.5 w-3.5" /> +33 7 62 30 21 08
            </a>
            <a href={EMAIL_LINK} className="hover:text-white transition-colors flex items-center gap-1.5 font-medium">
              <Mail className="h-3.5 w-3.5" /> {EMAIL_ADDRESS}
            </a>
          </div>

          <p className="max-w-xs mx-auto text-[11px] text-amber-100/50 leading-relaxed">
            Disponible rapidement pour simplifier votre quotidien dans le quartier. N'hésitez pas à me contacter pour toute demande !
          </p>

          <div className="pt-4 border-t border-emerald-900 text-[10px] text-amber-100/30">
            © {new Date().getFullYear()} • Augustin Courault • Conçu avec soin
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-amber-100/80 shadow-[0_-4px_12px_rgba(46,37,32,0.05)] py-3 px-4 sm:px-6">
        <div className="max-w-md mx-auto flex gap-3">
          <Button
            asChild
            className="flex-1 py-5 text-sm font-bold bg-[#1E3F20] hover:bg-[#1E3F20]/90 text-[#FAF6F0] rounded-xl shadow-xs transition-all active:scale-[0.97] duration-150 flex items-center justify-center gap-2 border border-emerald-950"
          >
            <a href={`tel:${PHONE_NUMBER}`}>
              <Phone className="h-4 w-4 shrink-0" />
              Appeler Augustin
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="py-5 px-4 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-xl shadow-xs transition-all active:scale-[0.97] duration-150 flex items-center justify-center border-0"
            title="Discuter sur WhatsApp"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-5 w-5 shrink-0 fill-current" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="py-5 px-4 bg-[#C86446] hover:bg-[#C86446]/90 text-white rounded-xl shadow-xs transition-all active:scale-[0.97] duration-150 flex items-center justify-center border-0"
            title="Envoyer un e-mail"
          >
            <a href={EMAIL_LINK}>
              <Mail className="h-5 w-5 shrink-0 text-white" />
            </a>
          </Button>
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}