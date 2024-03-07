import Image from "next/image"
function Logo () {
    return(
        <>
            <Image src="https://svgtrace-upload-results-bucket.s3.amazonaws.com/2024-03-07/windows_448b4017-4fab-4531-8456-e53cc60e046b_1709771650718.svg"
                alt="logo"
                width={100}
                height={80}
            />
        </>
    )
}

export default Logo