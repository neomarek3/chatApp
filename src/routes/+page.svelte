<script>
    import ChatWindow from "$lib/chatWindow.svelte";
</script>

<main>
    <body>
        <div class="chatWindowDiv">
            <ChatWindow />
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
