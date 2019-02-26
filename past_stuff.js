  <div id="app">
    <!-- Navbar (sit on top) -->
    <div class="w3-top">
      <div class="w3-bar" id="myNavbar">
        <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);"
          onclick="toggleFunction()" title="Toggle Navigation Menu">
          <i class="fa fa-bars"></i>
        </a>
        <a href="index.html" class="w3-bar-item w3-button">HOME</a>
        <a href="profile.html" class="w3-bar-item w3-button w3-hide-small">PROFILE</a>
        <a href="settings.html" class="w3-bar-item w3-button w3-hide-small">SETTINGS</a>
        <!--button to add journal entry-->
        <a class="w3-bar-item w3-button w3-hide-small" v-b-modal="'journalEntryModal'">ADD ENTRY</a>
      </div>

      <!-- Navbar on small screens -->
      <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
        <a href="profile.html" class="w3-bar-item w3-button" onclick="toggleFunction()">PROFILE</a>
        <a href="settings.html" class="w3-bar-item w3-button" onclick="toggleFunction()">SETTINGS</a>
        <a class="w3-bar-item w3-button" v-b-modal="'journalEntryModal'">ADD ENTRY</a>
      </div>

      <div id="myModal" class="entry-modal">

          <div class="entry-modal-content">
              <div class="entry-modal-header">
                  <h2 id="header-date"></h2>
                <span class="close">&times;</span>
                
              </div>
              <div class="entry-modal-body">
                <div class="row">
                  <h4 class="col-sm-3"><strong>Daily Color: </strong></h4>
                  <div id="daily-color" class="col-sm-1"></div>
                </div>
                <div class="row">
                  <h4 class="col-sm-12"><strong>Emotions: </strong> Angry, Stressed, Excited</h4>
                </div>
                <div class="row">
                  <h4 class="col-sm-12"><strong>Journal Entry</strong></h4>
                </div>
                <div class="row">
                    <div class="col-sm-12">Today was an overall good day. I'm feeling really 
                      stressed because I have a million assignments to do and it feels
                    like I have no time to do them. I'm excited for the weekend to be
                     here.</div>
                  </div>

              </div>
            </div>
        
        </div>


      <!--modal for form -->
      <b-modal ref="journalEntryModalRef" id="journalEntryModal" size="lg" hide-footer title="Create New Journal Entry"
        text-variant="black">
        <b-container fluid>
          <!--form-->
          <b-row class="my-1">
            <b-col sm="2">
              <label for="date">Current Date:</label>
            </b-col>
            <b-col sm="10">
              <p type="number" id="date">Febuary {{newEntry.id}}, 2019</p>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="2">
              <label for="color">Enter Color:</label>
            </b-col>
            <b-col sm="10">
              <b-form-input v-model="newEntry.color" type="text" id="color" placeholder="Enter the color" />
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="2">
              <label for="emotions">Enter Emotion</label>
            </b-col>
            <b-col sm="10">
              <b-form-input type="text" id="emotions" v-model="newEntry.emotions" placeholder="Enter emotions" />
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="2">
              <label for="thoughts">Enter Thoughts:</label>
            </b-col>
            <b-col sm="10">
              <b-form-input id="thoughts" type="text" v-model="newEntry.entry" placeholder="Enter your thoughts" />
            </b-col>
          </b-row>
          <!--submit entry-->
          <b-button @click="addEntry(newEntry)">Submit</b-button>

        </b-container>
      </b-modal>
    </div>

    <!--calendar-->
    <div class="month">
      <ul>
        <li class="prev">&#10094;</li>
        <li class="next">&#10095;</li>
        <li>Febuary</li>
        <li><span style="font-size:18px">2019</span></li>
      </ul>
    </div>

    <ul class="weekdays">
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
      <li>Su</li>
    </ul>

    <ul class="days">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li><span class="active">10</span></li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
    </ul>


    <!--statistic part maybe used for gamifcation later-->
    <div class="w3-row w3-center w3-dark-grey w3-padding-16">
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">14+</span><br>
        Days Reflected On
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">55+</span><br>
        Emotions Saved
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">89+</span><br>
        Days Journaled
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">150+</span><br>
        Minutes Spent Journaling
      </div>


    </div>



    <!-- <b-container v-for="journal in journals" :key="journal.id">
      <p>{{journal.id}}</p>
      <p>{{journal.color}}</p>
      <p>{{journal.emotions}}</p>
      <p>{{journal.entry}}</p>
    </b-container> -->

  </div>
  <!--end app div-->

  <!-- Footer -->
  <footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">

  </footer>

  <script>
    // Modal Image Gallery
    function onClick(element) {
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
      var captionText = document.getElementById("caption");
      captionText.innerHTML = element.alt;
    }

    // Change style of navbar on scroll
    window.onscroll = function () {
      myFunction()
    };

    function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
    }

    // Used to toggle the menu on small screens when clicking on the menu button
    function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    }

    window.app = new Vue({
      el: "#app",
      data: {
        journals: [{
          id: 5,
          color: "purple",
          emotions: "joyful, confused",
          entry: "This was a great day."
        }],
        newEntry: {
          id: 8,
          color: "",
          emotions: "",
          entry: ""
        }
      },
      methods: {
        addEntry(newEntry) {
          this.journals.push(newEntry);
          this.$refs.journalEntryModalRef.hide()
        }
      },
      computed: {}

    });
  </script>