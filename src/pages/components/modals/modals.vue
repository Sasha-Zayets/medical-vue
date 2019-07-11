<template>
  <div>
    <tc-card :title="'Simple'">
      <tc-button @click="openModal('Modal window text content')">Open modal</tc-button>
    </tc-card>

    <tc-card :title="'Multiplex content'">
      <div class="buttons-list">
        <tc-button @click="openModal(modalBody)">Multiplex body</tc-button>
        <tc-button @click="openModal(modalBody, 'Modal title')">With header</tc-button>
        <tc-button @click="openModal(modalBody, modalHeader)">With custom header</tc-button>
        <tc-button @click="openModal(modalBody, null, 'Modal footer')">With footer</tc-button>
      </div>
    </tc-card>

    <tc-card :title="'Close options'">
      <div class="buttons-list">
        <tc-button @click="openModal(modalBody, 'Modal title')">Overlay close</tc-button>
        <tc-button @click="openModal(modalBody, 'Modal title', null, { closeButton: true, overlayClose: false })">
          With close button
        </tc-button>
        <tc-button @click="openModal(modalBody, 'Modal title', modalFooter, { overlayClose: false })">
          With custom close button
        </tc-button>
      </div>
    </tc-card>

    <tc-card :title="'Overlay'">
      <div class="buttons-list">
        <tc-button @click="openModal(modalBody, 'Modal title')">Default overlay</tc-button>
        <tc-button @click="openModal(modalBody, 'Modal title', null, { overlay: false, closeButton: true })">
          Without overlay
        </tc-button>
        <tc-button @click="openModal(modalBody, 'Modal title', null, { overlayClose: false, closeButton: true })">
          Overlay without close
        </tc-button>
      </div>
    </tc-card>

    <tc-card :title="'Width & height'" class="mb-0">
      <div class="buttons-list">
        <tc-button @click="openModal(modalBody, 'Modal title', null, { width: 300 })">Custom width</tc-button>
        <tc-button @click="openModal(modalBody, 'Modal title', modalFooter, { width: '100%' })">Full width</tc-button>
        <tc-button @click="openModal(modalBody, 'Modal title', null, { height: 400 })">Custom height</tc-button>
      </div>
    </tc-card>

    <div>
      <div v-if="modalHeader">
        <h2 class="title">Modal title</h2>
        <div class="actions">
          <tc-badge :view="'warning'">New</tc-badge>
        </div>
      </div>

      <div v-if="modalBody">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eum eveniet fugiat fugit illum, natus porro
          possimus quisquam soluta vitae. Aperiam molestias quae quaerat quibusdam rerum voluptates! Aspernatur, magnam
          quas?</p>

        <tc-input :placeholder="'Subscribe'"></tc-input>
      </div>

      <div class="actions justify-content-between" v-if="modalFooter">
        <tc-button :view="'error'" @click="closeModal()">Close</tc-button>
        <tc-button :view="'success'">Submit</tc-button>
      </div>
    </div>

  </div>
</template>
<script>
import tcCard from '@/components/ui/card/card'
import tcButton from '@/components/ui/button/button'
import tcBadge from '@/components/ui/badge/badge'
import tcInput from '@/components/ui/input/input'
import tcModal from '@/components/ui/modal/modal'
export default {
  data: () => ({
    modalHeader: true,
    modal: {
      body: '',
      header: '',
      footer: '',
      options: {
        height: '',
        width: '',
        closeButton: false,
        overlay: true,
        overlayClose: true
      }
    }
  }),
  methods: {
    openModal(body, header = null, footer = null, options = null) {
      this.modal.open({
        body: body,
        header: header,
        footer: footer,
        options: options
      })
    },

    closeModal() {
      this.modal.close();
    }
  },
  components: {
    tcCard,
    tcButton,
    tcBadge,
    tcInput,
    tcModal
  }
}
</script>
