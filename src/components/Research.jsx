import researchItems from '../data/researchItems';

const Research = () => {
  return (
    <section className='research'>
      <div className='container'>
        <div className='header'>
          <h2>
            <span>Research &</span>Technologies
          </h2>
          <button>Explore More</button>
        </div>
        <div className='content'>
          {researchItems.map(({ image, title, type, date }) => (
            <div className='research-item'>
              <div className='image'>
                <img src={image} alt={title} />
              </div>
              <div className='text'>
                <a href=''>
                  <h3>{title}</h3>
                </a>
                <div className='meta'>
                  <p className='type'>{type}</p>
                  <p className='date'>
                    <span className='material-symbols-outlined'>
                      calendar_month
                    </span>
                    {date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Research;
