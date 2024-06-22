const blogData = [
    {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'this is content of the first blog page.'
    },
    {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    },
    {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    }
  ];
//Create your function here with the name addBlog which takes a blog object as parameter
//Call each object present in blogData with addBlog.
//If page does not update the changes automatically please refresh
/*
You're developing a webpage that displays a list of blog posts. Each blog post should have a title, a date, and some text content.
You want to use JavaScript to create a new blog post element and append it to the blog list, for each blog post in an array of blog data.

Objective:

1. Write a function called addBlog that does the following:
Accepts one parameter, "blog", which is an object representing a single blog post. The object has the following properties:

a. title: a string representing the title of the blog post.
b. date: a string representing the date of the blog post.
c. content: a string representing the content of the blog post.
2. Creates a new div element with the class blog-post.
3. Creates a new div element with the class blog-header.
4. Creates a new h2 element with the class blog-title and the text of the title property.
5. Creates a new p element with the class blog-date and the text of the date property.
6. Creates a new p element with the class blog-content and the text of the content property.
7. Appends the h2 and p elements as children to the div element with the class blog-header.
8. Appends the div element with the class blog-header as a child to the div element with the class blog-post.
9. Appends the p element with the class blog-content as a child to the div element with the class blog-post.
10. Appends the div element with the class blog-post as a child node to the existing ul element with the class blog-list.

*/
for(let blog of blogData){
  
  addBlog(blog);
}
//Create your function here with the name addBlog which takes a blog object as parameter
//Call each object present in blogData with addBlog.
//If page does not update the changes automatically please refresh
function addBlog(blog){
  console.log(blog['title']);
const title =blog['title'];
const date = blog['date'];
const content = blog['content'];

const divElement=document.createElement('div');
divElement.className='blog-post';
const divHeaderElement=document.createElement('div');
divHeaderElement.className='blog-header';

const h2Element=document.createElement('h2');
h2Element.className='blog-title';
h2Element.textContent=title;
const dateElement=document.createElement('p');
dateElement.className='blog-date';
 dateElement.textContent=date;
const pElement=document.createElement('p');
pElement.className='blog-content';
pElement.textContent=content;
divElement.appendChild(divHeaderElement);
divHeaderElement.append(h2Element,pElement,dateElement);
divElement.append(pElement);
document.querySelector('ul').append(divElement);








}