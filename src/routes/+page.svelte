<script>
    import RegisterWindow from "$lib/registerWindow.svelte";
    import LoginWindow from "$lib/loginWindow.svelte";
    //export let data;
    //import { supabase } from "$lib/supabaseClient";

    let showLoginRegister = true;

    function loginRegister() {
        if (showLoginRegister) {
            showLoginRegister = false;
        } else {
            showLoginRegister = true;
        }
    }

    // async function fetchData() {
    //     const { data: rows, error } = await supabase
    //         .from("write_test")
    //         .select("*");
    //     if (error) {
    //         console.error("Error fetching data:", error);
    //     } else if (rows.length === 0) {
    //         console.log("No data found.");
    //     } else {
    //         console.log("Fetched data:", rows);
    //     }
    // }

    // let unistenje = 4;
    // async function deleteData() {
    //     const { error } = await supabase
    //         .from("write_test")
    //         .delete()
    //         .eq("id_write_test", unistenje);
    //     if (error) {
    //         console.log("there has been an error!");
    //     }
    // }
</script>

<main>
    <body>
        <div class="LoginPageDiv">
            {#if showLoginRegister}
                <LoginWindow>
                    <a
                        href="/"
                        class="linkLogin"
                        on:click|preventDefault={loginRegister}
                        >Click here to login</a
                    >
                </LoginWindow>
            {:else if !showLoginRegister}
                <RegisterWindow>
                    <a
                        href="/"
                        class="linkRegister"
                        on:click|preventDefault={loginRegister}
                    >
                        Click here to register</a
                    >
                </RegisterWindow>
            {/if}
        </div>
    </body>
</main>

<style>
    .LoginPageDiv {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .linkRegister,
    .linkLogin {
        padding-top: 15px;
        padding-left: 5px;
        font-size: 15px;
        font-weight: 600;
        font-style: italic;
    }
</style>
