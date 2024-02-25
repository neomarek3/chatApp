<script>
    import ChatWindow from "$lib/chatWindow.svelte";
    //export let data;
    import { supabase } from "$lib/supabaseClient";

    async function fetchData() {
        const { data: rows, error } = await supabase
            .from("write_test")
            .select("*");
        if (error) {
            console.error("Error fetching data:", error);
        } else if (rows.length === 0) {
            console.log("No data found.");
        } else {
            console.log("Fetched data:", rows);
        }
    }

    let unistenje = 4;
    async function deleteData() {
        const { error } = await supabase
            .from("write_test")
            .delete()
            .eq("id_write_test", unistenje);
        if (error) {
            console.log("there has been an error!");
        }
    }
</script>

<main>
    <body>
        <div class="chatWindowDiv">
            <ChatWindow />
            <!-- <ul>
                {#each data.countries as country}
                    <li>{country.name}</li>
                {/each}
            </ul> -->
        </div>
    </body>
</main>

<style>
    .chatWindowDiv {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
