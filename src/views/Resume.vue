<template>
  <div class="resume" style="padding-top: 20px;">
    
      <v-container class="p-fix"> 
            <v-row class="name"> Jack Ammon </v-row>
            <v-row class ="sub-header"> Aspiring Full Stack Software Engineer </v-row>
            <v-row class="text"> A natural-born servant leader who builds teams to solve problems. Searches for the treasure in others, bringing the best out to achieve a shared goal. A skilled communicator who knows how to translate technical ideas into language that is understandable and approachable. </v-row>

            <v-row style="padding-top: 16px;">
                <!-- left slide -->
                <v-col>
                    <v-row class="section-header"> Contact </v-row>
                    <v-row> <a> 509.808.1219 </a> </v-row>
                    <v-row> <a href="mailto:jammon17@georgefox.edu"> jammon17@georgefox.edu </a> </v-row>
                    <v-row> <a href="https://github.com/jackammon"> github.com/jackammon </a> </v-row>
                    <v-row> <a href="http://www.linkedin.com/in/jackammon"> linkedin.com/in/jackammon </a> </v-row>

                    <v-row class="section-header" style="padding-top: 16px;"> Skills </v-row>
                    <v-row class="sub-titles" style="padding-top: 4px;"> Hard </v-row>

                    <v-row class="text"> - Frontend: Javascript, Vue.JS, HTML, CSS </v-row>     
                    <v-row class="text"> - Backend: Java, C/C++, C#, Python, SQL </v-row>
                    <v-row class="text"> - Git, Docker, Unix </v-row>
                    <v-row class="text"> - OO & Functional programming </v-row>
                    
                    <v-row class="sub-titles" style="padding-top: 8px;"> Soft </v-row>
                    <v-row class="text"> - Writing and Speaking </v-row>
                    <v-row class="text"> - Team-Building </v-row>
                    <v-row class="text"> - Coordinating and delegating tasks </v-row>
                    <v-row class="text"> - Decision making </v-row>

                    <v-row class="section-header" style="padding-top: 16px;"> Education </v-row>
                    <v-row class="titles" style="margin-top: -4px !important;"> George Fox University </v-row>
                    <v-row class="text1" style="margin-top: -4px !important;"> Newberg, Oregon </v-row>
                    <v-row class="text2"> B.S. Computer Science, April 2021 </v-row>

                    <v-row class="p-title" style="padding-top: 16px;"> Relevant Courses </v-row>
                    <v-row class="i-text"> - Data Structures </v-row>
                    <v-row class="i-text"> - Object Oriented Design & Analysis </v-row>
                    <v-row class="i-text"> - Design & Analysis of Algorithms </v-row>
                    <v-row class="i-text"> - Web Based Programming </v-row>
                    <v-row class="i-text"> - Client-Server Systems </v-row>
                    <v-row class="i-text"> - Database Systems </v-row>
                    <v-row class="i-text"> - Human Computer Interactions </v-row>
                    <v-row class="i-text"> - Operating Systems </v-row>
                    <v-row class="i-text"> - Computer Security & Digital Forensics </v-row>


                </v-col>

                <!-- right side -->
                <v-col>
                    <v-row class="section-header"> Experience </v-row>
                    <v-row class="titles" > Freelance Web Developer </v-row>
                    <v-row class="text2" style="margin-top: -4px !important;"> @ Kingdom Web Development LLC </v-row>
                    <v-row class="text3"> May 2019-December 2020 </v-row>

                    <v-row class="titles" style="padding-top: 8px !important;"> Technical Manager </v-row>
                    <v-row class="text2" style="margin-top: -4px !important;"> @ Servant Engineering & Senior Design Projects for George Fox University </v-row>
                    <v-row class="text3"> Fall 2019-Spring 2021 </v-row>

                    <v-row class="p-title" style="padding-top: 16px !important;"> UP Movement </v-row>
                    <v-row class="dates"> Fall 2019-Fall 2020 </v-row>
                    <v-row class="text"> - Led a team of four building a full-stack web app from scratch </v-row>
                    <v-row class="text"> - Built the frontend in Vue.JS and the backend with C# and Docker. </v-row>
                    <v-row class="text"> - Communicated project requirements and design ideas with the client. </v-row>
                    <v-row class="text"> - Worked directly with a creative agency in an iterative development process. </v-row>
                    <v-row class="text"> - Integrated Stripe.JS to handle donations. </v-row>


                    <v-row class="p-title" style="padding-top: 16px !important;"> Access Solutions </v-row>
                    <v-row class="dates"> Fall 2020-Spring 2021 </v-row>
                    <v-row class="text"> - Led a team of six to design and build a comprehensive scheduling system. </v-row>
                    <v-row class="text"> - Ensured different phases of design and development progressed and integrated smoothly together.  </v-row>
                    <v-row class="text"> - Led weekly sprint meetings. </v-row>
                    <v-row class="text"> - Gave presentations to my advisors and clients. </v-row>
                    <v-row class="text"> - Built the frontend in Vue.JS and the backend with MySQL and Django in a Docker container.  </v-row>

                </v-col>
            </v-row>
      </v-container>

  </div>
</template>

<style lang="css" scoped>

    a {
        color: black !important;
    }

    .resume {
        font-family: 'Rubik' !important;
        text-align: left;
    }

    .name {
        font-weight: 900 !important;
        font-size: 42pt !important;
        line-height: 1.2em;
    }

    .sub-header {
        text-align: left;
        font-weight: 900 !important;
        font-size: 28pt !important;
    }

    .text {
        text-align: left;
        font-size: 14pt !important;
    }

    .i-text {
        text-align: left;
        font-size: 14pt !important;
        font-style: italic;
    }

    .p-title {
        font-size: 18pt !important;
        font-weight: 800 !important;
    }

    .text-summary {
        text-align: left;
    }

    .section-header {
        font-size: 30pt !important;
        font-weight: 900 !important;
        text-decoration-line: underline;
    }

    .titles {
        font-size: 24pt !important;
        font-weight: 800 !important;
    }

    .sub-titles {
        font-size: 22pt !important;
        font-weight: 900 !important;
    }

    .text1 {
        font-size: 18pt !important;
        font-weight: 500 !important;
    }

    .text2 {
        font-size: 16pt !important;
        font-weight: 400 !important;
    }

    .text3 {
        font-size: 14pt !important;
        font-weight: 400 !important;
        font-style: italic;
    }

    .p-fix {
        margin-right: auto;
        margin-left: auto;
        max-width: 950px;
    }

    .dates {
        font-size: 14pt !important;
        font-weight: 800 !important;
    }

</style>
