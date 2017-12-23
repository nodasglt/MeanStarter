import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface ProjectItemDialog {
    img: string,
    title: string,
    call: string,
    instrument: string,
    duration: string,
    site: string,
    summary: string,
}

export interface ProjectItem {
    title: string,
    sub: string,
    dialog: ProjectItemDialog,
}

export interface Project {
    title: string,
    items: ProjectItem[],
}

const Data: Project[] = [
    {
        title: 'Horizon 2020',
        items:
        [
            {
                title: 'Transforming Transport',
                sub: 'The TransformingTransport project will demonstrate, in a realistic, measurable, and replicable way the transformations that Big Data will bring to the mobility and logistics market.',
                dialog: {
                    img: 'http://opentech.webfactional.com/eltran/wp-content/uploads/2017/09/disrupt_logo1-300x88.png',
                    title: 'Transforming Transport',
                    call: 'ICT-15-2016-2017 – Big Data PPP: Large Scale Pilot actions in sectors best benefitting from data-driven innovation',
                    instrument: 'Research and Innovation Action (RIA)',
                    duration: '3 Years (2017 -2020)',
                    site: 'https://transformingtransport.eu/',
                    summary: `Big Data will have a profound economic and societal impact in the mobility and logistics sector, which is one of the most-used industries in the world contributing to approximately 15% of GDP. Big Data is expected to lead to 500 billion USD in value worldwide in the form of time and fuel savings, and savings of 380 megatons CO2 in mobility and logistics. With freight transport activities projected to increase by 40 % in 2030, transforming the current mobility and logistics processes to become significantly more efficient, will have a profound impact. A 10% efficiency improvement may lead to EU cost savings of EUR 100 billion. Despite these promises, interestingly only 19 % of EU mobility and logistics companies employ Big Data solutions as part of value creation and business processes.
                    The TransformingTransport project will demonstrate, in a realistic, measurable, and replicable way the transformations that Big Data will bring to the mobility and logistics market. To this end, TransformingTransport, validates the technical and economic viability of Big Data to reshape transport processes and services to significantly increase operational efficiency, deliver improved customer experience, and foster new business models. TransformingTransport will address seven pilot domains of major importance for the mobility and logistics sector in Europe:

                    Smart High-ways
                    Sustainable Vehicle Fleets
                    Proactive Rail Infrastructures
                    Ports as Intelligent Logistics Hubs
                    Efficient Air Transport
                    Multi-modal Urban Mobility
                    Dynamic Supply Chains
                    The TransformingTransport consortium combines knowledge and solutions of major European ICT and Big Data technology providers together with the competence and experience of key European industry players in the mobility and logistics domain.
                    `,
                }
            },
            {
                title: 'DISRUPT',
                sub: 'DISRUPT aims to spearhead the transition to the next-generation manufacturing by facilitating the vision of a “Smart Factory”.',
                dialog: {
                    img: 'http://opentech.webfactional.com/eltran/wp-content/uploads/2017/09/disrupt_logo1-300x88.png',
                    title: 'Decentralised architectures for optimised operations via virtualized processes and manufacturing ecosystem collaboration',
                    call: 'FOF-11 a-2016-DigitalAutomation',
                    instrument: 'Research and Innovation Action (RIA)',
                    duration: '3 Years (2016 -2019)',
                    site: '(under construction)',
                    summary: `Industry 4.0 is the next developmental stage in the organisation of the manufacturing value chain. ICT-based systems will play a major role, mainly by creating a virtual copy of the physical world and facilitating decentralised structures through Cyber-Physical Systems (CPS). Over the IoT, CPS cooperate with each other and humans in real-time. Via the Internet-of-Services, internal and cross-organisational services are utilised by participants of the value chain.   DISRUPT aims to spearhead the transition to the next-generation manufacturing by facilitating the vision of a “Smart Factory”. The new era of manufacturing asks for flexible factories that can be quickly reprogrammed to provide faster time-to-market responding to global consumer demand, address mass-customisation needs and bring life to innovative products. The traditional automation pyramid seems unable to accommodate this transformation. Our concept is to DISRUPT that pyramid by utilising the capabilities offered by modern ICT to facilitate (i) in-depth (self-) monitoring of machines and processes, (ii) decision support and decentralised (self-) adjustment of production, (iii) effective collaboration of the different IoT-connected machines with tools, services and actors (iv) seamless communication of information and decisions from and to the plant floor and (v) efficient interaction with value chain partners. Within DISRUPT, each element of production is controlled via the IoT by its virtual counterpart. The data collected is analysed to detect complex events that trigger automated actions. DISRUPT offers a set of decision support tools based on three core modules (modelling, simulation and optimisation) and a secure and flexible “plug-n-play” platform that will allow engineers from different disciplines to collaborate in developing services. It will be cloud-based to accommodate the anticipated high data volume  and computational needs, while offering accessibility via any device anywhere in the world.`,
                }
            },
            {
                title: 'DISRUPT',
                sub: 'DISRUPT aims to spearhead the transition to the next-generation manufacturing by facilitating the vision of a “Smart Factory”.',
                dialog: {
                    img: 'http://opentech.webfactional.com/eltran/wp-content/uploads/2017/09/disrupt_logo1-300x88.png',
                    title: 'Decentralised architectures for optimised operations via virtualized processes and manufacturing ecosystem collaboration',
                    call: 'FOF-11 a-2016-DigitalAutomation',
                    instrument: 'Research and Innovation Action (RIA)',
                    duration: '3 Years (2016 -2019)',
                    site: '(under construction)',
                    summary: `Industry 4.0 is the next developmental stage in the organisation of the manufacturing value chain. ICT-based systems will play a major role, mainly by creating a virtual copy of the physical world and facilitating decentralised structures through Cyber-Physical Systems (CPS). Over the IoT, CPS cooperate with each other and humans in real-time. Via the Internet-of-Services, internal and cross-organisational services are utilised by participants of the value chain.   DISRUPT aims to spearhead the transition to the next-generation manufacturing by facilitating the vision of a “Smart Factory”. The new era of manufacturing asks for flexible factories that can be quickly reprogrammed to provide faster time-to-market responding to global consumer demand, address mass-customisation needs and bring life to innovative products. The traditional automation pyramid seems unable to accommodate this transformation. Our concept is to DISRUPT that pyramid by utilising the capabilities offered by modern ICT to facilitate (i) in-depth (self-) monitoring of machines and processes, (ii) decision support and decentralised (self-) adjustment of production, (iii) effective collaboration of the different IoT-connected machines with tools, services and actors (iv) seamless communication of information and decisions from and to the plant floor and (v) efficient interaction with value chain partners. Within DISRUPT, each element of production is controlled via the IoT by its virtual counterpart. The data collected is analysed to detect complex events that trigger automated actions. DISRUPT offers a set of decision support tools based on three core modules (modelling, simulation and optimisation) and a secure and flexible “plug-n-play” platform that will allow engineers from different disciplines to collaborate in developing services. It will be cloud-based to accommodate the anticipated high data volume  and computational needs, while offering accessibility via any device anywhere in the world.`,
                }
            },
            {
                title: 'DISRUPT',
                sub: 'DISRUPT aims to spearhead the transition to the next-generation manufacturing by facilitating the vision of a “Smart Factory”.',
                dialog: {
                    img: 'http://opentech.webfactional.com/eltran/wp-content/uploads/2017/09/disrupt_logo1-300x88.png',
                    title: 'Decentralised architectures for optimised operations via virtualized processes and manufacturing ecosystem collaboration',
                    call: 'FOF-11 a-2016-DigitalAutomation',
                    instrument: 'Research and Innovation Action (RIA)',
                    duration: '3 Years (2016 -2019)',
                    site: '(under construction)',
                    summary: `Industry 4.0 is the next developmental stage in the organisation of the manufacturing value chain. ICT-based systems will play a major role, mainly by creating a virtual copy of the physical world and facilitating decentralised structures through Cyber-Physical Systems (CPS). Over the IoT, CPS cooperate with each other and humans in real-time. Via the Internet-of-Services, internal and cross-organisational services are utilised by participants of the value chain.   DISRUPT aims to spearhead the transition to the next-generation manufacturing by facilitating the vision of a “Smart Factory”. The new era of manufacturing asks for flexible factories that can be quickly reprogrammed to provide faster time-to-market responding to global consumer demand, address mass-customisation needs and bring life to innovative products. The traditional automation pyramid seems unable to accommodate this transformation. Our concept is to DISRUPT that pyramid by utilising the capabilities offered by modern ICT to facilitate (i) in-depth (self-) monitoring of machines and processes, (ii) decision support and decentralised (self-) adjustment of production, (iii) effective collaboration of the different IoT-connected machines with tools, services and actors (iv) seamless communication of information and decisions from and to the plant floor and (v) efficient interaction with value chain partners. Within DISRUPT, each element of production is controlled via the IoT by its virtual counterpart. The data collected is analysed to detect complex events that trigger automated actions. DISRUPT offers a set of decision support tools based on three core modules (modelling, simulation and optimisation) and a secure and flexible “plug-n-play” platform that will allow engineers from different disciplines to collaborate in developing services. It will be cloud-based to accommodate the anticipated high data volume  and computational needs, while offering accessibility via any device anywhere in the world.`,
                }
            },
            {
                title: 'DISRUPT',
                sub: 'DISRUPT aims to spearhead the transition to the next-generation manufacturing by facilitating the vision of a “Smart Factory”.',
                dialog: {
                    img: 'http://opentech.webfactional.com/eltran/wp-content/uploads/2017/09/disrupt_logo1-300x88.png',
                    title: 'Decentralised architectures for optimised operations via virtualized processes and manufacturing ecosystem collaboration',
                    call: 'FOF-11 a-2016-DigitalAutomation',
                    instrument: 'Research and Innovation Action (RIA)',
                    duration: '3 Years (2016 -2019)',
                    site: '(under construction)',
                    summary: `Industry 4.0 is the next developmental stage in the organisation of the manufacturing value chain. ICT-based systems will play a major role, mainly by creating a virtual copy of the physical world and facilitating decentralised structures through Cyber-Physical Systems (CPS). Over the IoT, CPS cooperate with each other and humans in real-time. Via the Internet-of-Services, internal and cross-organisational services are utilised by participants of the value chain.   DISRUPT aims to spearhead the transition to the next-generation manufacturing by facilitating the vision of a “Smart Factory”. The new era of manufacturing asks for flexible factories that can be quickly reprogrammed to provide faster time-to-market responding to global consumer demand, address mass-customisation needs and bring life to innovative products. The traditional automation pyramid seems unable to accommodate this transformation. Our concept is to DISRUPT that pyramid by utilising the capabilities offered by modern ICT to facilitate (i) in-depth (self-) monitoring of machines and processes, (ii) decision support and decentralised (self-) adjustment of production, (iii) effective collaboration of the different IoT-connected machines with tools, services and actors (iv) seamless communication of information and decisions from and to the plant floor and (v) efficient interaction with value chain partners. Within DISRUPT, each element of production is controlled via the IoT by its virtual counterpart. The data collected is analysed to detect complex events that trigger automated actions. DISRUPT offers a set of decision support tools based on three core modules (modelling, simulation and optimisation) and a secure and flexible “plug-n-play” platform that will allow engineers from different disciplines to collaborate in developing services. It will be cloud-based to accommodate the anticipated high data volume  and computational needs, while offering accessibility via any device anywhere in the world.`,
                }
            },
            {
                title: 'DISRUPT',
                sub: 'DISRUPT aims to spearhead the transition to the next-generation manufacturing by facilitating the vision of a “Smart Factory”.',
                dialog: {
                    img: 'http://opentech.webfactional.com/eltran/wp-content/uploads/2017/09/disrupt_logo1-300x88.png',
                    title: 'Decentralised architectures for optimised operations via virtualized processes and manufacturing ecosystem collaboration',
                    call: 'FOF-11 a-2016-DigitalAutomation',
                    instrument: 'Research and Innovation Action (RIA)',
                    duration: '3 Years (2016 -2019)',
                    site: '(under construction)',
                    summary: `Industry 4.0 is the next developmental stage in the organisation of the manufacturing value chain. ICT-based systems will play a major role, mainly by creating a virtual copy of the physical world and facilitating decentralised structures through Cyber-Physical Systems (CPS). Over the IoT, CPS cooperate with each other and humans in real-time. Via the Internet-of-Services, internal and cross-organisational services are utilised by participants of the value chain.   DISRUPT aims to spearhead the transition to the next-generation manufacturing by facilitating the vision of a “Smart Factory”. The new era of manufacturing asks for flexible factories that can be quickly reprogrammed to provide faster time-to-market responding to global consumer demand, address mass-customisation needs and bring life to innovative products. The traditional automation pyramid seems unable to accommodate this transformation. Our concept is to DISRUPT that pyramid by utilising the capabilities offered by modern ICT to facilitate (i) in-depth (self-) monitoring of machines and processes, (ii) decision support and decentralised (self-) adjustment of production, (iii) effective collaboration of the different IoT-connected machines with tools, services and actors (iv) seamless communication of information and decisions from and to the plant floor and (v) efficient interaction with value chain partners. Within DISRUPT, each element of production is controlled via the IoT by its virtual counterpart. The data collected is analysed to detect complex events that trigger automated actions. DISRUPT offers a set of decision support tools based on three core modules (modelling, simulation and optimisation) and a secure and flexible “plug-n-play” platform that will allow engineers from different disciplines to collaborate in developing services. It will be cloud-based to accommodate the anticipated high data volume  and computational needs, while offering accessibility via any device anywhere in the world.`,
                }
            },
        ]
    },
]



@Injectable()
export class ProjectsService {

    getProjects() : Observable<Project[]> {
        return Observable.of(Data);
    }
}
