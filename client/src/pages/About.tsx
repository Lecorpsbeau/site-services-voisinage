import React from 'react';
import { Button } from "../components/ui/button";
import { ArrowLeft, User, CheckCircle2, ShieldCheck, Star } from "lucide-react";

interface AboutProps {
  onBack: () => void;
}

export default function About({ onBack }: AboutProps) {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2E2520] pb-12 flex flex-col font-sans p-4 max-w-md mx-auto">
      {/* Bouton Retour */}
      <div className="pt-4 pb-6">
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-[#1E3F20] hover:bg-emerald-50/50 gap-2 pl-2 font-semibold text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux services
        </Button>
      </div>

      {/* Contenu de la page */}
      <main className="flex-1 space-y-8">
        <div className="text-center space-y-3">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-3xl border border-emerald-200 shadow-xs overflow-hidden">
            <img src="/avatar.png" alt="Augustin" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className="text-3xl">👋</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-[#1E3F20]">Qui suis-je ?</h1>
          <p className="text-xs font-semibold text-[#C86446] tracking-wide uppercase">Augustin — Votre voisin de confiance</p>
        </div>

        {/* Présentation principale */}
        <section className="bg-white border border-amber-100 rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-[#1E3F20] flex items-center gap-2">
            <User className="h-5 w-5 text-amber-600" /> Mon profil & engagement
          </h2>
          <div className="text-sm text-[#5E5550] leading-relaxed space-y-3">
            <p>
              Bonjour ! Moi c'est <strong>Augustin</strong>, j'ai 16 ans. Habitant de la région, j'ai décidé de mettre mon énergie, ma rigueur et mon sens de l'organisation au service de mon voisinage.
            </p>
            <p>
              Engagé depuis <strong>9 ans chez les Scouts et Guides de France</strong>, j'y ai développé des valeurs fortes : une grande autonomie, le sens des responsabilités, l'entraide et un esprit d'équipe à toute épreuve.
            </p>
          </div>
        </section>

        {/* Pourquoi mes qualités font la différence pour VOUS */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1E3F20] flex items-center gap-2 px-1">
            <Star className="h-5 w-5 text-amber-500" /> Mes qualités appliquées à vos besoins
          </h2>

          <div className="grid gap-3">
            {/* Qualité 1 -> Baby-sitting */}
            <div className="bg-white border border-amber-100 rounded-xl p-4 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[#1E3F20]">Patient, calme & animateur (Baby-sitting)</h4>
                <p className="text-xs text-[#5E5550] mt-1 leading-relaxed">
                  Actuellement en <strong>formation BAFA</strong> (première partie validée) et ayant encadré des enfants en club d'athlétisme, j'ai l'habitude de gérer, d'occuper et d'animer des groupes de primaires en toute sécurité et avec une grande patience.
                </p>
              </div>
            </div>

            {/* Qualité 2 -> Rangement & Logistique */}
            <div className="bg-white border border-amber-100 rounded-xl p-4 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[#1E3F20]">Organisé & Méthodique (Rangement & Colis)</h4>
                <p className="text-xs text-[#5E5550] mt-1 leading-relaxed">
                  Le tri, la gestion de projet et l'optimisation d'espaces me connaissent. Qu'il s'agisse de vider votre cave, de trier un garage encombré ou de gérer vos courses, je travaille avec méthode sans perdre de temps.
                </p>
              </div>
            </div>

            {/* Qualité 3 -> Bricolage & Jardinage */}
            <div className="bg-white border border-amber-100 rounded-xl p-4 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[#1E3F20]">Manuel, curieux & équipé (Bricolage & Jardin)</h4>
                <p className="text-xs text-[#5E5550] mt-1 leading-relaxed">
                  Très manuel (j'ai pu découvrir les rouages de la mécanique lourde en stage), j'aime comprendre comment fonctionnent les choses. Monter un meuble, fixer une étagère ou passer le Kärcher est un plaisir. Je suis minutieux et j'aime le travail soigné.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mes Engagements */}
        <section className="bg-[#1E3F20] text-amber-50/90 rounded-2xl p-5 space-y-3 shadow-md">
          <h3 className="font-serif font-bold text-base text-white">Mon engagement de proximité :</h3>
          <ul className="text-xs space-y-2 list-disc list-inside opacity-90 leading-relaxed">
            <li><strong>Zéro frais de déplacement :</strong> On habite le même quartier, pas de mauvaise surprise sur le tarif.</li>
            <li><strong>Ponctualité garantie :</strong> Le respect de l'heure fixée ensemble est ma priorité absolue.</li>
            <li><strong>Sourire et bienveillance :</strong> Rendre service, c'est avant tout partager un moment agréable entre voisins.</li>
          </ul>
        </section>
      </main>

      {/* Petit footer de la page */}
      <footer className="mt-12 pt-6 border-t border-amber-100 text-center text-xs text-[#8E8580]">
        À très vite pour vous donner un coup de main !
      </footer>
    </div>
  );
}