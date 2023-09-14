import "./index.css"

const ItemList = () => {

    const samuraiFilms = [
        {
          id: 1,
          title: 'Seven Samurai',
          director: 'Akira Kurosawa',
        },
        {
          id: 2,
          title: 'Yojimbo',
          director: 'Akira Kurosawa',
        },
        {
          id: 3,
          title: 'Sanjuro',
          director: 'Akira Kurosawa',
        },
        {
          id: 4,
          title: 'The Hidden Fortress',
          director: 'Akira Kurosawa',
        },
        {
          id: 5,
          title: 'Throne of Blood',
          director: 'Akira Kurosawa',
        },
        {
          id: 6,
          title: 'Harakiri',
          director: 'Masaki Kobayashi',
        },
        {
          id: 7,
          title: 'Sword of Doom',
          director: 'Kihachi Okamoto',
        },
        {
          id: 8,
          title: 'The Twilight Samurai',
          director: 'Yoji Yamada',
        },
        {
          id: 9,
          title: '13 Assassins',
          director: 'Takashi Miike',
        },
        {
          id: 10,
          title: 'Zatoichi: The Blind Swordsman',
          director: 'Takeshi Kitano',
        },
      ];
      
  
      
      return (
        <div>
          {samuraiFilms.map((item) => {
            return (
              <div key={item.id}>
                <h2 className="titles">{item.title}</h2>
                <p>By</p>
                <h3 className="directors">{item.director}</h3>
              </div>
            );
          })}
        </div>
      );
    };
    
export default ItemList;