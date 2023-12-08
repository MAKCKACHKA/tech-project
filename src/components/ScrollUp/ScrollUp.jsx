import './scroll.css';

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById('roll_back').classList.add('animate');
    document.getElementById('roll_back').classList.remove('animate-reverse');
  } else {
    document.getElementById('roll_back').classList.remove('animate-reverse');
    document.getElementById('roll_back').classList.add('animate-reverse');
  }
}

export default function ScrollUp() {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" id="roll_back" className="animate">
      <p className="arrow-up">^</p>
    </a>
  );
}
