module.exports = {

  posts: [
    {
      id: 'sdlfjksjfglkjs',
      title: 'Teste do Mural',
      description: 'Descrição teste'
    },
  ],

  getAll(){
    return this.posts;
  }, 

  newPost(title, description) {
    this.posts.push({ id: generationID(), title, description});
  }

};


const generationID = () => {
  return Math.random().toString(36).substr(2,9);
}
