import Image from "next/image"
import Link from "next/link"

function Logo () {
    return(
        <Link href={`/`} passHref>
            <Image src="https://svgtrace-upload-results-bucket.s3.amazonaws.com/2024-03-07/windows_448b4017-4fab-4531-8456-e53cc60e046b_1709771650718.svg"
                alt="logo"
                width={100}
                height={80}
            />
        </Link>
    )
}

export default Logo