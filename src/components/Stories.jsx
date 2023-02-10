import stories from '../data/stories';

const Stories = () => {
  return (
    <section className='stories'>
      <div className='container'>
        <div className='header'>
          <h2>
            <span>BioE</span>Stories
          </h2>
          <div className='buttons'>
            <button className='left'>&#60;</button>
            <button className='right'>&#62;</button>
          </div>
        </div>

        <div className='content'>
          {stories.map(({ id, text, image, name, year }) => (
            <div className='item' key={id}>
              <div className='text'>{text}</div>
              <div className='student'>
                <img src={image} alt='student' />
                <div className='info'>
                  <h3>{name}</h3>
                  <p>{year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stories;
