<template>
  <div class="form">
      <h2>REGISTRATION FORM</h2>
      <p id="line"></p>
      <form>
          <fieldset class="container-fieldset">
        <legend>Personal Info</legend>

        <div>
          <label for="first-name"> Player's First Name: </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            class="input-field"
          />

          <label for="last-name"> Last Name: </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            class="input-field"
          />

          <label for="street-address"> Street Address: </label>
          <input
            type="text"
            name="street-address"
            id="street-address"
            class="input-field"
          />

          <label for="city"> City: </label>
          <input type="text" name="city" id="city" class="input-field" />

          <label for="zip-code"> Zip Code: </label>
          <input
            type="number"
            name="zip-code"
            id="zip-code"
            class="input-field"
          />

          <label for="birth-date"> Birth Date: </label>
          <input
            type="date"
            name="birth-date"
            id="birth-date"
            class="input-field"
          />
          
        </div>
        <fieldset id="gender">
          <p>Gender:</p>
          <label>
            <input type="radio" name="gender" id="female" value="Female" />
            Female 
          </label>
          <label>
            <input type="radio" name="gender" id="male" value="Male" /> Male
          </label>
          <label>
            <input type="radio" name="gender" id="other" value="other" /> Other
          </label>
        </fieldset>

        <div>
          <label for="grade"
            >Grade:
            <select name="grade" id="grade" class="input-field">
              <option value="pre-school">Pre-School</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
            </select>
          </label>

          <label for="parent"
            >Parent/Guardian:
            <input type="text" name="parent" id="parent" class="input-field" />
          </label>
          <label for="phone-number">
            Contact Phone:
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              class="input-field"
            />
          </label>
          <label for="mail-contact"
            >Mail:
            <input
              type="email"
              name="mail-contact"
              id="mail-contact"
              class="input-field"
            />
          </label>
        </div>

        <fieldset>
          <legend>Which elementary schools do you live near?</legend>
          <fieldset>
            <label for="first-closest-school"
              >First Closest School:
              <select
                name="first-closest-school"
                id="first-closest-school"
                class="input-field"
              >
                <option value="AJ-Katzenmaier">AJ Katzenmaier</option>
                <option value="Greenbay">Greenbay</option>
                <option value="Howard-A-Yeager">Howard A Yeager</option>
                <option value="Marjorie-P-Hart">Marjorie P Hart</option>
                <option value="North-Elementary">North Elementary</option>
                <option value="South-Elementary">South Elementary</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <label for="second-closest-school"
              >Second Closest School:
              <select
                name="second-closest-school"
                id="second-closest-school"
                class="input-field"
              >
                <option value="AJ-Katzenmaier">AJ Katzenmaier</option>
                <option value="Greenbay">Greenbay</option>
                <option value="Howard-A-Yeager">Howard A Yeager</option>
                <option value="Marjorie-P-Hart">Marjorie P Hart</option>
                <option value="North-Elementary">North Elementary</option>
                <option value="South-Elementary">South Elementary</option>
              </select>
            </label>
          </fieldset>
        </fieldset>
        <fieldset class="position">
          <legend >Position</legend>
          <fieldset>
            <legend class="tiny-legend">
              <strong> What position(s) do you normally play?</strong> (check
              all that apply)
            </legend>
            <label>
              <input
                type="checkbox"
                name="position-normaly-played"
                value="forward"
              />Fordward
            </label>
            <label>
              <input
                type="checkbox"
                name="position-normaly-played"
                value="defense"
              />Defense
            </label><br>
            <label>
              <input
                type="checkbox"
                name="position-normaly-played"
                value="midfield"
              />Midfield
            </label>
            <label>
              <input
                type="checkbox"
                name="position-normaly-played"
                value="goalkeeper"
              />Goalkeeper
            </label>
          </fieldset>
          <fieldset>
            <legend class="tiny-legend">
              <strong>What position(s) do you want to play?</strong> (check all
              that apply)
            </legend>

            <label>
              <input
                type="checkbox"
                name="position-wanted"
                value="forward"
              />Fordward
            </label>
            <label>
              <input
                type="checkbox"
                name="position-wanted"
                value="defense"
              />Defense
            </label> <br>
            <label>
              <input
                type="checkbox"
                name="position-wanted"
                value="midfield"
              />Midfield
            </label>
            <label>
              <input
                type="checkbox"
                name="position-wanted"
                value="goalkeeper"
              />Goalkeeper
            </label>
          </fieldset>
        </fieldset>
        <fieldset class="uniform">
          <legend>Uniform</legend>
          <label for="uniform">
            <input type="radio" name="uniform" id="uniform" />Already Have a
            Uniform
          </label>
        <br>
          <label for="jersey-size">
            Jersey Size:
            <select name="jersey-size" id="jersey-size" class="input-field">
              <option value="youth-small">Youth Small</option>
              <option value="youth-medium">Youth Medium</option>
              <option value="youth-large">Youth Large</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </label>
          <label for="shorts-size">
            Shorts Size:
            <select name="shorts-size" id="shorts-size" class="input-field">
              <option value="youth-small">Youth Small</option>
              <option value="youth-medium">Youth Medium</option>
              <option value="youth-large">Youth Large</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </label>
        </fieldset>
        <fieldset id="permission">
          <legend>Permission to Play</legend>
          <p>
            I, the parent or guardian of the minor registrant, agree that the
            registrant and I will abide by all the rules of the Northside Youth
            Soccer League (NYSL). In recognizing the possibility of physical
            injury associated with soccer and in consideration for the “League”
            accepting the registrant for its soccer programs and activities, I
            hereby release, discharge, and/or otherwise indemnify NYSL, their
            employees and associated personnel and volunteers, including the
            facilities used for practices and games, against any claim by or on
            behalf of the registrant as a result of the registrant’s
            participation in the program and/or being transported to or from
            NYSL sponsored activities, which transportation. By entering my name
            below, I hereby agree and authorize the above. In addition, by
            entering my name below, I also acknowledge that I have read the
            cancellation policy and agree to its terms.
          </p>
          <label
            >Parent/Guardian Signature:
            <input type="text" name="signature" class="input-field" />
          </label>
          <label
            >Date:
            <input type="date" name="date" class="input-field" />
          </label>
        </fieldset>
      </fieldset>
      <div>
        <b-button v-b-modal.modal-center>Submit</b-button>

        <b-modal id="modal-center"  hide-footer centered title="Succes">
        <p class="my-4">Data was submitted successfully</p>
        </b-modal>
         </div>
      </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Registration",
  computed: {
    ...mapState(["landscape"]),
  },
};
</script>

<style scoped lang="scss">
#line{
  border-bottom: 2px solid #7fff00;
}
h2 {
  font-weight: bold;
  width: 90%;
  font-size: 30px;
  text-align: center;
  margin-top: 10%;
  color: black;
  background-color: #7fff00;
  border: 4px solid black;
  border-radius: 10px;
  padding: 2px;
  margin-left: 20px;
}
form{
  font-family: 'Times New Roman', Times, serif;
  background-color:whitesmoke ;
  padding-bottom: 98px;
}
.input-field{
   display: block;
    width: 55vw;
    background-color: #008080;
    color: white;
    border-radius: 10px;
    padding: 5px 20px;
    margin: 2px auto;
}
input{
  
    font-size: 15px;
}

.container-fieldset {
    
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    margin: 0px auto;
    display: flex; 
    width: 100vw;
}

legend{
 text-decoration: underline;
 text-decoration-color: #7FFF00;
 padding-top: 2.5rem;
}

#gender {
  p{ 
    margin-bottom: 0;
  }
  label{
    margin-right: 3px;
  }
}
.tiny-legend{
  padding-top: 1rem;
  border: 0;
  font-size:18px;
}

.position{
  input{
    margin-right: 5px;
    margin-left: 10px;
  }
}
.uniform{
  input{
     margin-right: 5px;
  }
}
#permission{
   p{
    text-align: justify;
    width: 80vw;
    margin: 8px auto;
  }
}
#submit {
    display: flex;
    background-color: #033949;
    padding: 15px 20px;
    align-items: center;
    color: white;
    font-weight: 700;
    border: none;
    margin-left: 100%;
}
</style>