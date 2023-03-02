export default {
    props: ["paginationData","getProduct"],
    template:`<nav aria-label="Page navigation example">
    <ul class="pagination">
      
      <li class="page-item" :class="{disabled: !paginationData.has_pre}">
        <a @click.prevent="getProduct(paginationData.current_page-1)" class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li v-for="page in paginationData.total_pages" :key="page +'page'" class="page-item" :class="{active: page==paginationData.current_page}">
        <a  @click=$emit("emitGetProduct",page) class="page-link" href="#">{{ page }}</a>        
      </li>
      
      <li class="page-item" :class="{disabled: !paginationData.has_next}">
        <a  @click.prevent="getProduct(paginationData.current_page+1)" class="page-link"  href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
    </nav>
    `
}