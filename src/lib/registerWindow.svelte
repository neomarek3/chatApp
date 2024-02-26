<script>
    import { supabase } from "./supabaseClient";
    let email = "";
    let username = "";
    let password = "";

    export async function insertData() {
        const { rows, error } = await supabase
            .from("username_password")
            .insert([
                {
                    email: `${email}`,
                    username: `${username}`,
                    password: `${password}`, //po ovom gledam koji je
                },
            ])
            .select();

        if (error) {
            console.error("Error fetching data:", error);
        } else if (rows.length === 0) {
            console.log("No data found.");
        } else {
            console.log("Fetched data:", rows);
        }
    }
    async function registracija() {
        let { error } = supabase.auth.signUp({
            email: `${email}`,
            password: `${password}`,
        });
        if (error) {
            console.log("error");
        }
    }
</script>

<div class="chatComponent">
    <div class="inputi">
        <input
            placeholder="Email"
            name="text"
            class="input"
            style="margin-bottom: 15px;"
            bind:value={email}
        />
        <input
            placeholder="Username"
            name="text"
            class="input"
            style="margin-bottom: 15px;"
            bind:value={username}
        />
        <input
            type="password"
            placeholder="Password"
            name="text"
            class="input"
            bind:value={password}
        />
        <slot />
    </div>
    <div class="gumb">
        <button on:click={registracija}>Registration</button>
    </div>
</div>

<style>
    .chatComponent {
        height: 70vh;
        width: 50vh;
        background-color: #b3b3b3;
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 25px;
        opacity: 20%;
        box-shadow: 10px 10px #404040;
        flex-direction: column;
    }
    .inputi {
        display: flex;
        flex-direction: column;
        padding-bottom: 50px;
    }
    .input {
        --input-focus: #2d8cf0;
        --font-color: #323232;
        --font-color-sub: #666;
        --bg-color: #fff;
        --main-color: #323232;
        width: 350px;
        height: 50px;
        border-radius: 5px;
        border: 2px solid black;
        background-color: var(--bg-color);
        box-shadow: 4px 4px #404040;
        font-size: 15px;
        font-weight: 600;
        color: var(--font-color);
        padding: 5px 10px;
        outline: none;
    }

    .input::placeholder {
        color: var(--font-color-sub);
        opacity: 0.9;
    }

    .input:focus {
        border: 2px solid black;
    }
    button {
        width: 200px;
        height: 50px;
        border-radius: 5px;
        border: 2px solid black;
        background-color: white;
        box-shadow: 4px 4px #404040;
        font-size: 15px;
        font-weight: 600;
        color: var(--font-color);
        padding: 5px 10px;
        outline: none;
    }
    .gumb {
        display: flex;
        flex-direction: column;
        padding: 5px;
    }
</style>
