<script>
</script>

<div class="chatComponent">
    <div class="inputi">
        <input
            placeholder="Username"
            name="text"
            class="input"
            style="margin-bottom: 15px;"
        />
        <input
            type="password"
            placeholder="Password"
            name="text"
            class="input"
        />
    </div>
    <div class="gumb">
        <button>Login</button>
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
</style>
