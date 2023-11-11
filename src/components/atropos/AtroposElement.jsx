import Atropos from 'atropos/react';

function AtroposElement({ Element }) {
  return (
    <div>
        <Atropos 
            style={{ width: 'auto', height: 'auto' }}
            component='div'
            duration={200}
            rotate={true}
            rotateXMax={20}
            rotateYMax={20}
            shadow={false}
            highlight={false}
        >
            { Element }
        </Atropos>
    </div>
  )
}

export default AtroposElement