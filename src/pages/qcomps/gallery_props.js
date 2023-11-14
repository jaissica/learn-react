function Profile({ person, size }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={"https://i.imgur.com/" + person.imageId + "s.jpg"}
        alt={person.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession.join(" and ")}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>
          {person.awards.join(", ")}
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered.join(" ")}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Profile</h1>
      <Profile
        person={{
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdG",
          profession: ["physicist", "chemist"],
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
          discovered: ["polonium (element)"],
        }}
        size={70}
      />
      <Profile
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
          profession: ["geochemist"],
          awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
          discovered: ["a method for measuring carbon dioxide in seawater"],
        }}
        size={70}
      />
    </div>
  );
}
