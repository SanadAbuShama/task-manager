import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/ui/theme-provider'

function SignUp() {

    const { setTheme } = useTheme();

    return (
        <>
            <Button onClick={() => setTheme('dark')} className='bg-grape'>Signp</Button>
        </>
    )
}

export default SignUp
