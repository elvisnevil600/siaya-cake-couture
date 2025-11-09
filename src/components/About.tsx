const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            About Becky's Bakery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Welcome to Becky's Bakery, your premier destination for exquisite custom cakes in Bondo, Siaya County. 
            With years of experience and a passion for perfection, Becky specializes in designing and baking 
            exceptional cakes for every occasion.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            From elegant wedding cakes to fun birthday celebrations, from graduation milestones to anniversary 
            commemorations, Becky can create the perfect cake that exceeds your expectations. Every cake is 
            crafted with premium ingredients, attention to detail, and a personal touch that makes your 
            celebration truly memorable.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <div className="text-4xl">🎂</div>
              <h3 className="font-playfair text-xl font-semibold">Custom Designs</h3>
              <p className="text-muted-foreground">Every cake is uniquely designed to match your vision</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">✨</div>
              <h3 className="font-playfair text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">Only the finest ingredients for exceptional taste</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">💝</div>
              <h3 className="font-playfair text-xl font-semibold">Made with Love</h3>
              <p className="text-muted-foreground">Each cake is crafted with passion and care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
