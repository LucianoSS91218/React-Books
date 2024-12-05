import { useId } from "react";
import Book from "../components/book";
import Layout from "../components/layout";
import { useBooks } from "../store zustand/Store.js";
import { useFilters } from "../store zustand/FiltersStore.js";

export default function Home() {
  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  const { books } = useBooks();

  const { filterBooks, setFilter } = useFilters();

  const genreFilterId = useId();

  const handleChangeGenre = (event) => {
    setFilter(event.target.value);
  };

  const filteredBooks = filterBooks(books);

  return (
    <Layout>
      <div id="filtercategory">
        <label style={{ marginRight: "8px" }}>Filtrado:</label>
        <select id={genreFilterId} onChange={handleChangeGenre} 
          style={{ width: "15%", padding: "10px", borderRadius: "6px" }}>
          <option value="all">Todos</option>
          <option value="arte">Arte</option>
          <option value="laptops">Astrologia</option>
          <option value="autoayuda">Autoayuda</option>
          <option value="autobiografico">Autobiografico</option>
          <option value="aventuras">Aventuras</option>
          <option value="belico">Belico</option>
          <option value="biologia">Biologia</option>
          <option value="clasico">Clasico</option>
          <option value="ciencia ficcion">Ciencia Ficcion</option>
          <option value="ciencias naturales">Ciencias Naturales</option>
          <option value="cine">Cine</option>
          <option value="cuentos">Cuentos</option>
          <option value="critica">Critica</option>
          <option value="cronicas">Cronicas</option>
          <option value="deportes">Deportes</option>
          <option value="diccionarios">Diccionarios</option>
          <option value="didactico">Didactico</option>
          <option value="divulgacion">Divulgacion</option>
          <option value="drama">Drama</option>
          <option value="erotico">Erotico</option>
          <option value="espionaje">Espionaje</option>
          <option value="fantasia">Fantasia</option>
          <option value="ficcion">Ficcion</option>
          <option value="filosofia">Filosofia</option>
          <option value="fisica">Fisica</option>
          <option value="gastronomia">Gastronomia</option>
          <option value="geografia">Geografia</option>
          <option value="laptops">Historia</option>
          <option value="laptops">Humor</option>
          <option value="laptops">Idiomas</option>
          <option value="laptops">Infantil</option>
          <option value="informatica">Informatica</option>
          <option value="intriga">Intriga</option>
          <option value="magia">Magia</option>
          <option value="manuales y cursos">Manuales y Cursos</option>
          <option value="matematicas">Matematicas</option>
          <option value="medicina">Medicina</option>
          <option value="medieval">Medieval</option>
          <option value="misterio">Misterio</option>
          <option value="mitos">Mitos</option>
          <option value="musica">Musica</option>
          <option value="negocios">Negocios</option>
          <option value="novela">Novela</option>
          <option value="novela negra">Novela Negra</option>
          <option value="otros">Otros</option>
          <option value="periodismo">Periodismo</option>
          <option value="poesia">Poesia</option>
          <option value="policial">Policial</option>
          <option value="politica">Politica</option>
          <option value="psicologia">Psicologia</option>
          <option value="relato">Relato</option>
          <option value="quimica">Quimica</option>
          <option value="salud y bienestar">Salud y Bienestar</option>
          <option value="satira">Satira</option>
          <option value="sexualidad">Sexualidad</option>
          <option value="sociologia">Sociologia</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="terror">Terror</option>
          <option value="thriller">Thriller</option>
        </select>
      </div>
      <br />
      <div style={booksContainer}>
        {filteredBooks.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}

