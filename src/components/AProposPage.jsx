import Seo from './Seo'

export default function AProposPage() {
  return (
    <div className="about-page">
      <Seo
        title="À propos"
        description="Hbof, c'est Hector - un étudiant en communication passionné de parfum. Un carnet olfactif personnel, sans publicité, sans algorithme."
        path="/a-propos"
      />
      <section className="chroniques-header">
        <div className="chroniques-header__inner">
          <p className="chroniques-header__eyebrow">À propos</p>
          <h1 className="chroniques-header__title">Hbof</h1>
          <p className="chroniques-header__intro">
            Un carnet olfactif. Un regard personnel sur l'art du parfum.
          </p>
        </div>
      </section>

      <div className="about-page__body">
        <section className="about-section">
          <p className="about-section__eyebrow">Le blog</p>
          <h2 className="about-section__title">Hbof, c'est quoi ?</h2>
          <p className="about-section__text">
            Hbof est un blog dédié au parfum. Pas un catalogue, pas un guide d'achat - un carnet
            personnel dans lequel j'explore l'univers olfactif sous toutes ses formes : des
            fragrances du quotidien aux matières premières les plus rares, en passant par l'histoire
            des maisons et les intentions des parfumeurs.
          </p>
          <p className="about-section__text">
            Ce blog s'adresse à tout le monde. Aux curieux qui veulent comprendre pourquoi un parfum
            leur plaît sans savoir comment l'expliquer. Aux passionnés qui veulent aller encore plus
            loin dans leur connaissance des références, des accords, des origines. Le parfum est
            souvent réduit à un simple accessoire - ici, il est traité comme ce qu'il est vraiment :
            un art à part entière.
          </p>
        </section>

        <div className="about-page__divider" />

        <section className="about-section">
          <p className="about-section__eyebrow">L'auteur</p>
          <h2 className="about-section__title">Hbof, c'est qui ?</h2>
          <p className="about-section__text">
            Hbof c'est moi, Hector - H pour la première lettre de mon prénom, Bof en référence à
            mon nom de famille. Un pseudonyme simple, presque évident une fois qu'on le sait. Je
            produis ce contenu pour moi avant tout, et pour tous ceux qui veulent m'écouter et
            partager cette passion.
          </p>
          <p className="about-section__text">
            Je suis étudiant en communication, et c'est justement là que le parfum m'a vraiment
            saisi. En communication, on étudie les codes, les messages, les émotions que l'on
            cherche à transmettre. Le parfum fait exactement cela - mais de façon invisible,
            instinctive, presque inconsciente. Une fragrance peut évoquer un souvenir enfoui,
            projeter une image, créer un lien. C'est peut-être la forme de communication la plus
            subtile qui soit, et c'est ce qui me fascine.
          </p>
        </section>

        <div className="about-page__divider" />

        <section className="about-section about-section--link">
          <p className="about-section__eyebrow">Le site</p>
          <h2 className="about-section__title">hbof.me</h2>
          <p className="about-section__text">
            Ce carnet est hébergé à l'adresse{' '}
            <a className="about-section__link" href="https://hbof.me">
              hbof.me
            </a>
            . Il est construit avec soin, sans publicité, sans algorithme. Juste du texte, des
            parfums, et l'envie de bien faire.
          </p>
        </section>
      </div>
    </div>
  )
}
