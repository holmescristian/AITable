<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-toolbar dark flat color="blue">
            <v-toolbar-title style="color: #ffffff;">Expandable Table</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="black" dark @click="expand = !expand">
                {{ expand ? 'Close' : 'Keep' }} other rows
            </v-btn>
        </v-toolbar>
        <v-data-table
                :headers="headers"
                :items="faces"
                :expand="expand"
                item-key="name"
        >
            <template v-slot:items="props">
                <tr @click="props.expanded = !props.expanded">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-center">{{ props.item.id }}</td>
                    <td class="text-xs-center">{{ props.item.time }}</td>
                </tr>
            </template>
            <template v-slot:expand="props">
                <v-card flat>
                    <v-img src="https://i.imgur.com/yNwH3jV.jpg" style="height: 216px; width: 384px"></v-img>
                </v-card>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    //import {http} from '../store/index'
    export default {
        data: () => ({
            expand: false,
            headers: [
                {
                    text: 'Name',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'ID', align: 'center', sortable: false, value: 'id' },
                { text: 'Time', align: 'center', sortable: false, value: 'time' }
            ],
            faces: [
                {
                    name: "name",
                    id: "id",
                    time: "10:30PM"
                },
                {
                    name: "name",
                    id: "id",
                    time: "10:30PM"
                },
                {
                    name: "name",
                    id: "id",
                    time: "10:30PM"
                },
                {
                    name: "name",
                    id: "id",
                    time: "10:30PM"
                },
                {
                    name: "name",
                    id: "id",
                    time: "10:30PM"
                },
                {
                    name: "name",
                    id: "id",
                    time: "10:30PM"
                },
                {
                    name: "name",
                    id: "id",
                    time: "10:30PM"
                },
                {
                    name: "name",
                    id: "id",
                    time: "10:30PM"
                }
            ]
            }),
        methods: {
        },
        mounted () { // On Mount, Load your data. Only the tasks now.
        }
    }
</script>

<style scoped>

</style>
