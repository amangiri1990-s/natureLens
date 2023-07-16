import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  public pageDetail: any = '';
  constructor() {}
  ngOnInit(): void {
    let content =
      "Welcome to our gallery of nature photos! We are thrilled to have you here and share our love for the breathtaking beauty of the natural world. Our collection showcases the wonders of nature captured through the lens of talented photographers who are passionate about preserving and celebrating our planet's remarkable diversity.\n\nAt NatureLens, we believe that nature has the power to inspire, heal, and ignite a sense of wonder within us. Our mission is to bring you closer to nature through stunning visual storytelling, allowing you to immerse yourself in its splendor from the comfort of your own screen.\n\nWe aim to provide a platform for both seasoned nature enthusiasts and those new to the wonders of the natural world. Whether you're seeking serenity through serene seascapes, yearning for the majesty of towering mountains, or marveling at the delicate intricacies of flora and fauna, our collection offers something to captivate and engage every viewer.\n\nAs you navigate our website, we hope you'll find inspiration, a renewed sense of wonder, and a deeper connection to the world around you. Our photographs aim to transport you to far-off destinations, evoke emotions, and foster a greater appreciation for the fragile ecosystems that make our planet so extraordinary.\n\nWe believe that nature photography is not just about capturing an image; it is about telling a story. Behind each photograph lies an adventure, a moment frozen in time, and a profound connection between the photographer and their subject. Through our gallery, we aim to share these stories and the passion that drives us to explore, discover, and protect our natural heritage.\n\nThank you for joining us on this visual journey through the wonders of nature. We invite you to immerse yourself in our gallery and experience the beauty, serenity, and boundless inspiration that nature provides. We hope our collection sparks a sense of curiosity and encourages you to explore and preserve the precious gift of our natural world.\n\nIf you have any questions or feedback, please don't hesitate to contact us. We're excited to embark on this adventure with you.\n\nSincerely,\n\nNatureLens";

    this.pageDetail = content.split('\n\n');
  }
}
