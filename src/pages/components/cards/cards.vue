<template>
  <div class="cards">
    <h4 class="mt-0">Simple cards</h4>

    <div class="row">
      <div class="col-12 col-md-6">
        <tc-card :title="'Card\'s title'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
          culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, reprehenderit.</p>
        </tc-card>
      </div>
    </div>

    <h4>Colored cards</h4>

    <div class="row">
      <div class="col-12 col-md-6">
        <tc-card :view="'accent'" :title="'Accent'">
          <b>Standard card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :view="'info'" :title="'Info'">
          <b>Info card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :view="'success'" :title="'Success'">
          <b>Success card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :view="'warning'" :title="'Warning'">
          <b>Warning card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :view="'error'" :title="'Error'">
          <b>Error card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :tcBgColor="'#ff7043'" :tcColor="'#f5f5f5'" :title="'Custom'">
          <b>Custom card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>
    </div>

    <h4>Outline cards</h4>

    <div class="row">
      <div class="col-12 col-md-6">
        <tc-card :outline="true" :title="'Default'">
          <b>Standard card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :outline="true" :view="'accent'" :title="'Accent'">
          <b>Accent card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :outline="true" :view="'info'" :title="'Info'">
          <b>Info card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :outline="true" :view="'success'" :title="'Success'">
          <b>Success card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :outline="true" :view="'warning'" :title="'Warning'">
          <b>Warning card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :outline="true" :view="'error'" :title="'Error'">
          <b>Error card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :outline="true" :tcColor="'#698a8d'" :tcBorderColor="'#698a8d'" :title="' Color - #698a8d'">
          <b>Custom card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :outline="true" :tcColor="'#52280f'" :tcBorderColor="'#52280f'" :title="'Color - #52280f'">
          <b>Custom card.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>
    </div>

    <h4>Gradient cards</h4>

    <div class="row">
      <div class="col-12 col-md-6">
        <tc-card :tcGradient="['#ed5564', '#ed83d0']" :tcColor="'#fff'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :tcGradient="['#fff', '#fbfbfb']">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>
    </div>

    <h4>Card shapes</h4>

    <div class="row">
      <div class="col-12 col-md-6">
        <tc-card :view="'accent'" :title="'Default shape'">
          <b>Squere card</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :view="'accent'" :tcShape="0" :title="'Shape - 0'">
          <b>Default card</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :view="'accent'" :tcShape="10" :title="'Shape - 10px'">
          <b>Rounded card</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :view="'accent'" :tcShape="'2rem'" :title="'Shape - 2rem'">
          <b>Rounded card</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis
          temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>
    </div>

    <h4>Align cards</h4>

    <div class="row">
      <div class="col-12 col-md-4">
        <tc-card :view="'error'" :title="'Left'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
          culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-4">
        <tc-card :view="'warning'" :align="'center'" :title="'Center'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
          culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>

      <div class="col-12 col-md-4">
        <tc-card :view="'success'" :align="'right'" :title="'Right'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
          culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?
        </tc-card>
      </div>
    </div>

    <h4>Background image cards</h4>

    <div class="row">
      <div class="col-12 col-md-6">
        <tc-card :bgImg="'/assets/content/bg-card-1.jpg'" :tcColor="'#d8d8d8'">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :bgImg="'/assets/content/bg-card-2.jpg'" :tcColor="'#fff'">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
        </tc-card>
      </div>
    </div>

    <h4>Image cards</h4>

    <div class="row">
      <div class="col-12 col-md-6">
        <tc-card :img="'/assets/content/bg-card-2.jpg'" :tcColor="'#000000'" class="mb-md-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
        </tc-card>
      </div>

      <div class="col-12 col-md-6">
        <tc-card :img="'/assets/content/bg-card-1.jpg'" :view="'accent'" :tcColor="'#ffffff'" class="mb-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis
            culpa labore velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
        </tc-card>
      </div>
    </div>
  </div>
</template>
<script>
import tcCard from '@/components/ui/card/card'
export default {
  components: {
    tcCard
  }
}
</script>
