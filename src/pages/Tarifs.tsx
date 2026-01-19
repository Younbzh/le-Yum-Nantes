import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Tarifs() {
  return (
    <div className="space-y-16 md:space-y-20">
      <Section
        eyebrow="Tarifs"
        title={`Les tarifs de ${siteConfig.clubName}`}
        description="Voici une présentation plus moderne et plus lisible des formules proposées, pensée pour rassurer les visiteurs et mettre en valeur le positionnement du club."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Couples</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              L’expérience centrale du club, présentée ici de manière élégante afin de refléter son importance dans l’harmonie sociale du lieu.
            </p>
          </div>
          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold text-white">Femmes seules</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Une mise en avant qui valorise l’attention portée à cette clientèle, avec une communication rassurante et respectueuse.
            </p>
          </div>
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Hommes seuls</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Une explication claire des conditions d’accès ou des sélections permet d’éviter les malentendus et de maintenir l’équilibre du club.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Lecture"
        title="Comment les visiteurs perçoivent cette section"
        description="Une mise en forme sobre, aérée et structurée aide le visiteur à comprendre rapidement le positionnement du club et renforce la confiance."
      />
    </div>
  );
}

export default Tarifs;
