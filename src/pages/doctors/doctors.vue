<template>
  <div class="doctors">
    <div class="row">
      <div class="col-12 col-md-4" v-for="(doctor, index) of doctors" :key="index">
        <tc-contact
          :data="doctor"
          :class="{ 'mb-0': l, 'mb-md-0': (i + 2) === doctors.length || (i + 3) === doctors.length }"
        ></tc-contact>
      </div>
    </div>

    <!-- <div class="add-action-box">
      <tc-button
        :afterIcon="'icofont-contact-add'"
        :square="true"
        :tcShape="500"
        @click="openModal(modalBody, 'Add doctor', modalFooter)"
      ></tc-button>
    </div>

    <!-- Modal window -->
      <!-- <div v-if="modalBody">
        <form :formGroup="doctorForm" novalidate class="new-doctor-form">
          <tc-form-group class="avatar-box">
            <input type="file" accept="image/*" @change="onFileChanged($event)" hidden>

            <tc-avatar :src="currentAvatar"></tc-avatar>
            <tc-button :type="'button'" :afterIcon="'icofont-ui-user'" :view="'accent'" :outline="true" @click="fileInput.click()">
              Select image
            </tc-button>
          </tc-form-group>

          <tc-form-group>
            <tc-input :placeholder="'First name'" formControlName="name"></tc-input>
          </tc-form-group>

          <tc-form-group>
            <tc-input :placeholder="'Last name'" formControlName="lastName"></tc-input>
          </tc-form-group>

          <div class="row">
            <div class="col-12 col-sm-6">
              <tc-form-group>
                <tc-autocomplete :placeholder="'Speciality'" :data="specialists" formControlName="role"></tc-autocomplete>
              </tc-form-group>
            </div>

            <div class="col-12 col-sm-6">
              <tc-form-group>
                <tc-select :placeholder="'Gender'" formControlName="gender" :options="gender"></tc-select>
              </tc-form-group>
            </div>
          </div>

          <tc-form-group>
            <tc-textarea :placeholder="'Address'" formControlName="address"></tc-textarea>
          </tc-form-group>

          <tc-form-group v-if="doctorForm.controls['social'].controls && doctorForm.controls['social'].controls.length">
            <tc-form-label>Social networks</tc-form-label>

            <div formArrayName="social" class="social-list">
              <div class="social-item">
                <div class="row" v-for="(item, index) of doctorForm.controls['social'].controls" :key="index" :formGroup="item">
                  <div class="col">
                    <div class="row">
                      <tc-form-group class="col-12 col-sm-6">
                        <tc-input
                          :placeholder="'Icon class'"
                          :prefixIcon="item.value.icon"
                          :readonly="true"
                          formControlName="icon"
                        ></tc-input>
                      </tc-form-group>

                      <tc-form-group class="col-12 col-sm-6">
                        <tc-input :placeholder="'Link'" formControlName="link"></tc-input>
                      </tc-form-group>
                    </div>
                  </div>

                  <div class="col col-auto">
                    <button
                      tc-button
                      :afterIcon="'icofont-ui-delete'"
                      :view="'error'"
                      :square="true"
                      :outline="true"
                      :tcShape="500"
                      :type="'button'"
                      @click="removeControl(doctorForm.controls['social'], i)"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </tc-form-group>

          <tc-form-label>Add social network</tc-form-label>

          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col-12 col-sm-6 mb-4 mb-md-0">
                  <tc-input :placeholder="'Icon class'" #icon></tc-input>
                </div>

                <div class="col-12 col-sm-6">
                  <tc-input :placeholder="'Link'" #link></tc-input>
                </div>
              </div>
            </div>

            <div class="col col-auto">
              <button
                tc-button
                :afterIcon="'icofont-plus'"
                :type="'button'"
                :view="'accent'"
                :square="true"
                :outline="true"
                :tcShape="500"
                @click="addControl(doctorForm.controls['social'], icon, link)"
              ></button>
            </div>
          </div>
        </form>
      </div> -->

      <!-- <div v-if="modalFooter">
        <div class="actions justify-content-between">
          <tc-button :type="'button'" :view="'error'" @click="closeModal()">Cancel</tc-button>
          <tc-button :view="'info'" :disabled="doctorForm.invalid" @click="addDoctor(doctorForm)">
            Add doctor
          </tc-button>
        </div>
      </div> --> 
    <!-- end Modal window -->

  </div>
</template>
<script>
import tcButton from '@/components/ui/button/button'
import tcContact from '@/components/ui/contact/contact'
export default {
  components: {
    tcButton,
    tcContact
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/variables';

.doctor {
  .add-action-box {
    bottom: $module-rem * 8;
    position: fixed;
    right: $module-rem * 2;
    z-index: 9997;

    .tc-btn {
      font-size: 30px;
    }
  }
}
.new-doctor-form {
  .avatar-box {
    align-items: center;
    display: flex;
  }
  .social-list {
    .social-item {
      border-bottom: 1px solid rgba(#000,.1);
    }
  }
}

</style>
