import publications from '../data/publications';

const Publications = () => {
  return (
    <section className='publications'>
      <div className='container'>
        <div className='header'>
          <h2>Publications</h2>
          <button>Explore More</button>
        </div>

        <div className='content'>
          {publications.map(({ id, image, title, date }) => (
            <div className='item' key={id}>
              <img src={image} alt={title} />
              <div className='text'>
                <a href=''>
                  <h3>{title}</h3>
                </a>
                <p className='date'>
                  <span className='material-symbols-outlined'>
                    calendar_month
                  </span>
                  {date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Publications;
