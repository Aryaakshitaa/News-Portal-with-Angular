import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  id: number = 0

  constructor(private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramData) => {
      this.id = paramData.id;
    })
  }
  newsData = [
    {
      url: "assets/img/trending/trending_top.jpg",
      heading: "APPETIZERS",
      para: "Remember those neon-hued ropes we used to play with, rather hop around with back in our childhood days? That was a time when we could eat an entire heap of pancakes, a whole pizza or a cheesy burger and not put on even an inch of fat. All that bouncing around always ensured that we were burning those extra calories.It may be just a rope, but the fact is, how you use this basic tool can help a great deal in keeping you fit. Fitness experts often suggest including skipping in one’s daily fitness regime, and of course teaming it up with other exercises.There are many individuals who lean towards skipping than running, because of the numerous benefits of skipping.If you look at it, it’s simple, easy and a whole lot of fun, plus you get to burn a lot of calories while you are at it.According to Shakti Kumar Yadav, Head Trainer at Gold's Gym, Delhi, “10 minutes of skipping burns more calories than 45 minutes of running.” Dr. Amal Ghosh, Clinical Tutor (Rtd) of N.R.S. Hospital in Kolkata says, “skipping is one of the best and most effortless approach to shed that additional fat in your body. It also helps in improving your heart rate.”"
    },
    {
      url: "assets/img/trending/trending_bottom1.jpg",
      heading: "LIFESTYLES",
      para: "Self-awareness involves being aware of different aspects of the self including traits, behaviors, and feelings. Essentially, it is a psychological state in which oneself becomes the focus of attention. Self-awareness is one of the first components of the self-concept to emerge. While self-awareness is something that is central to who you are, it is not something that you are acutely focused on at every moment of every day. Instead, self-awareness becomes woven into the fabric of who you are and emerges at different points depending on the situation and your personality.​ People are not born completely self-aware. Yet research has also found that infants do have a rudimentary sense of self-awareness.People who are privately self-conscious have a higher level of private self-awareness, which can be both a good and bad thing.These people tend to be more aware of their feelings and beliefs, and are therefore more likely to stick to their personal values."
    },
    {
      url: "assets/img/trending/trending_bottom2.jpg",
      heading: "SPORTS",
      para: "Hyatt Regency and Hyatt House Manchester will add two new members to its marketing team. The additions, being Helen Hipkiss and Laura Benefer, are North-West hospitality experts.Hipkiss, who has been appointed as marketing and communications manager, previously worked at Marketing Manchester and Manchester’s Lowry Hotel and therefore brings experience of hotel marketing experience in the city.Hyatt Regency and Hyatt House Manchester will add two new members to its marketing team. The additions, being Helen Hipkiss and Laura Benefer, are North-West hospitality experts.Hipkiss, who has been appointed as marketing and communications manager, previously worked at Marketing Manchester and Manchester’s Lowry Hotel and therefore brings experience of hotel marketing experience in the city.Hyatt Regency and Hyatt House Manchester will add two new members to its marketing team. The additions, being Helen Hipkiss and Laura Benefer, are North-West hospitality experts.Hipkiss, who has been appointed as marketing and communications manager, previously worked at Marketing Manchester and Manchester’s Lowry Hotel and therefore brings experience."
    },
    {
      url: "assets/img/trending/trending_bottom3.jpg",
      heading: "TRAVELS",
      para: "Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six friends in their 20s and 30s who live in Manhattan, New York City.Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six friends in their 20s and 30s who live in Manhattan, New York City.Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. With an ensemble cast starring Jennifer.Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes to avoid software."
    },
    {
      url: "assets/img/trending/right1.jpg",
      heading: "CONCERT",
      para: "Glastonbury Festival today announced its first headliner: Billie Eilish will take the Pyramid Stage on Friday night, June 24.Promoter Emily Eavis said, “We couldn’t be happier to announce that the wondrous Billie Eilish is headlining the Pyramid on the Friday at next year’s Glastonbury Festival, becoming the youngest solo headliner in our history. This feels like the perfect way for us to return and I cannot wait!”She'll be the youngest solo headliner in Glastonbury's long history. It also marks Eilish’s first UK festival headline performance. It's not her first Glastonbury appearance, though, having performed on the Other Stage in 2019."
    },
    {
      url: "assets/img/trending/right2.jpg",
      heading: "SEA BEACH",
      para: "My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable. They’re elegant, smart, beautiful, kind…everything we want to be. At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from. the refractor telescope uses a convex lens to focus the light on the eyepiece. The reflector telescope has a concave lens which means it bends in. It uses mirrors to focus the image that you eventually see. Collimation is a term for how well tuned the telescope is to give you a good clear image of what you are looking at. You want your telescope to have good collimation so you are not getting a false image of the celestial body. Aperture is a fancy word for how big the lens of your telescope is. But it’s an important word because the aperture of the lens is the key to how powerful your telescope is.Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software."
    },
    {
      url: "assets/img/trending/right3.jpg",
      heading: "BIKE SHOW",
      para: "Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupiedDummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes to avoid software."
    },
    {
      url: "assets/img/trending/right4.jpg",
      heading: "PLAY",
      para: "Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount. Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch. Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount. Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields."
    },
    {
      url: "assets/img/trending/right5.jpg",
      heading: "SKEPING",
      para: "Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied.Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes to avoid software."
    },
    {
      url: "assets/img/news/whatNews4.jpg",
      heading: "LIFESTYLE",
      para: "Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied.Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied.Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software. "
    },
    {
      url: "assets/img/news/whatNews3.jpg",
      heading: "SPORTS",
      para: "Magnification has nothing to do with it, its all in the aperture. Focuser is the housing that keeps the eyepiece of the telescope, or what you will look through, in place. The focuser has to be stable and in good repair for you to have an image you can rely on. Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount.Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all."
    },
    {
      url: "assets/img/news/whatNews1.jpg",
      heading: "BIKE SHOW",
      para: "Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied.Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software."
    },
    {
      url: "assets/img/news/whatNews2.jpg",
      heading: "SEA BEACH",
      para: "Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied.Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software testing issues by ensuring that all variables and data fields are occupied. Dummy data is a information that does not contain any useful data, Dummy data can be used as a placeholder for both testing and operational purposes. to avoid software."
    }
  ]
}
