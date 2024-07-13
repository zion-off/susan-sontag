import Image from "next/image";
import NavBar from "@/components/navBar";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Blob from "@/components/blob";

import styles from "./page.module.css";

export default function SusanSontag() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Blob />
      <Banner
        topText={"literature was the passport"}
        lowerText={"to enter a larger life; that is, the zone of freedom."}
      />
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          <p>
            Susan Sontag was born in New York City on January 16, 1933, grew up
            in Tucson, Arizona, and attended high school in Los Angeles. She
            received her B.A. from the College of the University of Chicago and
            did graduate work in philosophy, literature, and theology at Harvard
            University and Saint Anne’s College, Oxford. <br /> <br /> Her
            books, all published by Farrar, Straus & Giroux, include four
            novels, The Benefactor, Death Kit, The Volcano Lover, and In
            America; a collection of short stories, I, etcetera; several plays,
            including Alice in Bed and Lady from the Sea; and nine works of
            nonfiction, starting with Against Interpretation and including On
            Photography, Illness as Metaphor, Where the Stress Falls, Regarding
            the Pain of Others, and At the Same Time. In 1982, FSG published A
            Susan Sontag Reader.
          </p>
          <img
            src="/images/susanBioImage01-2.jpg"
            alt="Susan Sontag"
            className={styles.bioImage}
          />
        </div>
        <div className={styles.sectionTwo}>
          Ms. Sontag wrote and directed four feature-length films: Duet for
          Cannibals (1969) and Brother Carl (1971), both in Sweden; Promised
          Lands (1974), made in Israel during the war of October 1973; and
          Unguided Tour (1983), from her short story of the same name, made in
          Italy. Her play Alice in Bed has had productions in the United States,
          Mexico, Germany, and Holland. Another play, Lady from the Sea, has
          been produced in Italy, France, Switzerland, Germany, and Korea.{" "}
          <br /> <br /> Ms. Sontag also directed plays in the United States and
          Europe, including a staging of Beckett's Waiting for Godot in the
          summer of 1993 in besieged Sarajevo, where she spent much of the time
          between early 1993 and 1996 and was made an honorary citizen of the
          city. <br /> <br /> A human rights activist for more than two decades,
          Ms. Sontag served from 1987 to 1989 as president of the American
          Center of PEN, the international writers’ organization dedicated to
          freedom of expression and the advancement of literature, from which
          platform she led a number of campaigns on behalf of persecuted and
          imprisoned writers. <br /> <br /> Her stories and essays appeared in
          newspapers, magazines, and literary publications all over the world,
          including The New York Times, The New Yorker, The New York Review of
          Books, The Times Literary Supplement, Art in America, Antaeus,
          Parnassus, The Threepenny Review, The Nation, and Granta. Her books
          have been translated into thirty-two languages.
        </div>
        <div className={styles.sectionThree}>
          <img
            src="/images/susanBioImage02.jpg"
            alt="Susan Sontag"
            className={styles.bioImage}
          />
          <p>
            Among Ms. Sontag's many honors are the 2003 Peace Prize of the
            German Book Trade, the 2003 Prince of Asturias Prize, the 2001
            Jerusalem Prize, the National Book Award for In America (2000), and
            the National Book Critics Circle Award for On Photography (1978). In
            1992 she received the Malaparte Prize in Italy, and in 1999 she was
            named a Commandeur de l'Ordre des Arts et des Lettres by the French
            government (she had been named an Officier in the same order in
            1984). Between 1990 and 1995 she was a MacArthur Fellow.
            <br /> <br />
            Ms. Sontag died in New York City on December 28, 2004.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
