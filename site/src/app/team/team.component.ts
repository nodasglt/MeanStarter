import {
  Component,
} from '@angular/core';

import {
    UserProfile,
} from '../profile-card';

import { BannerService } from '../banner';

@Component({
  selector: 'team',
  styleUrls: [ '../landing-page/landing-page.component.scss', 'team.component.scss' ],
  templateUrl: 'team.component.html'
})
export class TeamComponent {

    constructor(
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('Eltrun Team');
        });
    }

    profile: UserProfile = {
        img: "https://i0.wp.com/circuits.io/assets/circuits-default-gravatar.png",
        name: "George Doukidis",
        title: "Professor",
        phone: "2109437282",
        mail: "test@supppp.com",
        address: "47A Evelpidon Str. & 33 Lefkados Str., Office 910",
        bio: "Georgios I. Doukidis is Professor and Director of the MSc in the Department of Management Science and Technology at the Athens University of Economics and Business (AUEB). He holds an MSc in Operational Research and PhD in Information Systems from the London School of Economics (LSE) where he taught for nine years. He has also taught in various European Business Schools and was visiting Professor at Brunel University. At AUEB he is the Director of ELTRUN -one of the largest eBusiness Research Center of all European Business Schools- where he managed more than 35 international projects with leading Universities and international companies. The research output excellence of ELTRUN has been recognized by various international awards: the European Microsoft Retail Application Development (RAD) award 2002, the European Case Study Award 2099 in “Knowledge, Information and Communication Systems Management” category and the European ECR award in retail innovation in 2015. He was the first chairman of TANEO (the Greek New Economy Fund) and currently is the director of the Innovation and Entrepreneurship Center (MOKE) of AUEB that is considered as a European best practice in promoting and assisting new entrepreneurship in Universities. He is the co-founder of Ennovation, the largest student competition on digital innovation and entrepreneurship in Greece with yearly participation of more than 350 students, and the ACEin incubation center of AUEB. He has published 10 books with international publishers and more than 200 scientific papers and acted as guest editor seven times in leading international OR/IS academic Journals. He is academic advisor of IELKA, board member of ECR-Hellas and member of the employment committee of AMCHAM and also served as vice-presidents of GRECA (the Greek eCommerce Association). In the last 30 years he has acted as consultant or board member in more than 50 large local or international organizations in areas such as business development, innovation and re-engineering.",
    };
}
