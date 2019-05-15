<template>
  <v-layout row>
    <v-flex xs12 sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Manage</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list class="grey lighten-1 pt-3" dark>
            <v-list-tile  v-for="(m, i) in menu" :key="i" @click="console.log('f')">
              <v-list-tile-action>
                <v-icon>{{ m.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content class="white--text">
                <v-list-tile-title>{{ m.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props:[
    'menu'
  ],
    data: () => ({
      items: [
        {
          action: 'move_to_inbox',
          title: 'Inbox'
        },
        {
          action: 'send',
          title: 'Sent'
        },
        {
          action: 'delete',
          title: 'Trash'
        },
        {
          action: 'report',
          title: 'Spam'
        },
        { divider: true },
        { header: 'Labels' },
        {
          action: 'label',
          title: 'Family'
        },
        {
          action: 'label',
          title: 'Friends'
        },
        {
          action: 'label',
          title: 'Work'
        }
      ]
    })
  }
</script>